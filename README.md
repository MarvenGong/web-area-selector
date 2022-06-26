# web-area-selector

类似其他截图工具的页面

# 效果图

<img src="https://marven.cn-bj.ufileos.com/web-area-select.gif" width="100%"/>

# 使用方法

1. 安装

```js
npm i --save web-area-selector
```

或者

```js
yarn add web-area-selector
```

2. 导入

```js
import AreaSelector from "web-area-selector";
```

3. 在需要开始录制的位置通过单例来开始截图，如下

```js
async selectArea() {
  const result = await AreaSelector.getInstance().init();
  alert(JSON.stringify(result));
}
```

> 上面代码中，会等待用户完成框选并返回结果，结果信息如下,分别为框选区域的左上角和右下角的位置

```js
{
  leftTop: {
    clientX: 121,
    clientY: 200
  },
  rightBottom: {
    clientX: 1213,
    clientY: 850
  }
}
```

可以使用上面的矩形区域信息来做其他事情，如通过其他截图插件截图等

4. AreaSelector 也支持中途退出框选，在需要退出的地方调用

```js
AreaSelector.getInstance().stop();
```

即可

如下面，监听键盘 `ESC` 事件

```js
document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 27:
      AreaSelector.getInstance().stop();
      break;
  }
});
```

> PS: 建议通过单例模式来操作，以免造成不必要的麻烦
