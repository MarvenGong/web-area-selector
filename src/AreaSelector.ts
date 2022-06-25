function styleInject(css: string, ref?: any) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if ((style as any).styleSheet) {
    (style as any).styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css = `
  #ic-screenshot-mask{
    position:fixed;width:1px;height:1px;
    box-sizing:border-box;
    box-shadow:0 0 9999px 9999px rgba(0,0,0,0.3);
    left:0;top:0;z-index: 1000
  }
  #ic-screenshot-cross-line{position:fixed;width:0;height:0;left:0;top:0;z-index:1000;}
  #ic-screenshot-cross-line:before,#ic-screenshot-cross-line:after{display:inline-block;content:" ";background:#fff}
  #ic-screenshot-cross-line:before{position:absolute;width:1px;height:8888px;left:0;top:50%;margin-top:-4444px}
  #ic-screenshot-cross-line:after{position:absolute;height:1px;width:8888px;top:0;margin-left:-4444px}
`;
styleInject(css);
interface IClientPosition {
  clientX: number;
  clientY: number;
}
interface IAreaInfo {
  leftTop: IClientPosition;
  rightBottom: IClientPosition;
}
class AreaSelector {
  static instance: AreaSelector | null = null;
  startPosition: IClientPosition = {
    clientX: 0,
    clientY: 0,
  };
  isSelecting = false;
  selectedAreaInfo: IAreaInfo = {
    leftTop: { clientX: 0, clientY: 0 },
    rightBottom: { clientX: 0, clientY: 0 }
  }
  promiseResolve: (area: IAreaInfo) => void = () => { };
  static getInstance = () => {
    if (!AreaSelector.instance) AreaSelector.instance = new AreaSelector();
    return AreaSelector.instance;
  }
  init = (): Promise<IAreaInfo> => {
    this.getOrCreateElementById('ic-screenshot-mask');
    this.getOrCreateElementById('ic-screenshot-cross-line');
    document.addEventListener('mousemove', this.mousemoveEvent);
    document.addEventListener('mousedown', this.mousedownEvent);
    document.addEventListener('mouseup', this.mouseupEvent);
    return new Promise((resove) => {
      this.promiseResolve = resove;
    });;
  }
  getPoint(first: IClientPosition, second: IClientPosition) {
    return {
      leftTop: {
        clientX: Math.min(first.clientX, second.clientX),
        clientY: Math.min(first.clientY, second.clientY)
      },
      rightBottom: {
        clientX: Math.max(first.clientX, second.clientX),
        clientY: Math.max(first.clientY, second.clientY)
      }
    };
  }
  getOrCreateElementById(id: string): HTMLDivElement {
    let element: HTMLDivElement | null = document.querySelector("#".concat(id));
    if (element) {
      return element;
    }
    element = document.createElement('div');
    element.setAttribute('id', id);
    document.body.appendChild(element);
    return element;
  }
  /**
   * 按下鼠标开始截取
   * @param event 
   */
  mousedownEvent: any = (event: MouseEvent) => {
    this.startPosition = {
      clientX: event.clientX,
      clientY: event.clientY
    }
    this.isSelecting = true;
  }
  /**
   * 鼠标移动
   * @param event 
   */
  mousemoveEvent: any = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const eleCrossLine: HTMLDivElement = document.getElementById('ic-screenshot-cross-line') as HTMLDivElement;
    eleCrossLine.style.left = clientX + 'px';
    eleCrossLine.style.top = clientY + 'px';
    if (this.isSelecting) {
      const areaInfo = this.getPoint(this.startPosition, { clientX, clientY });
      const eleMask = this.getOrCreateElementById('ic-screenshot-mask');
      eleMask.style.left = areaInfo.leftTop.clientX + 'px';
      eleMask.style.top = areaInfo.leftTop.clientY + 'px';
      eleMask.style.width = areaInfo.rightBottom.clientX - areaInfo.leftTop.clientX + 'px';
      eleMask.style.height = areaInfo.rightBottom.clientY - areaInfo.leftTop.clientY + 'px';
    }
  }
  /**
   * 放开鼠标停止选取
   * @param event 
   */
  mouseupEvent: any = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    // 获取结果
    this.selectedAreaInfo = this.getPoint(this.startPosition, { clientX, clientY });
    // 结束选择并清空状态
    this.stop();
    this.isSelecting = false;
    this.startPosition = {
      clientX: 0,
      clientY: 0
    }
    // 返回结果给调用方
    this.promiseResolve(this.selectedAreaInfo);
  }
  stop() {
    const eleMastk = this.getOrCreateElementById('ic-screenshot-mask');
    const eleCrossLine = this.getOrCreateElementById('ic-screenshot-cross-line');
    eleMastk.remove();
    eleCrossLine.remove();
    document.removeEventListener('mousemove', this.mousemoveEvent);
    document.removeEventListener('mousedown', this.mousedownEvent);
    document.removeEventListener('mouseup', this.mouseupEvent);
  }
}
export default AreaSelector;