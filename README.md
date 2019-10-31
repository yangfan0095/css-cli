## css-cli

简介 一个常用css包生成工具

### quick start 

npm install css-cli -g

css-cli create [生成的css文件夹名]


#### scss-template 模板生成的目录结构示例：
```
common
├─border.scss
├─color.scss
├─colorValue.scss
├─flex.scss
├─fontSize.scss
├─heightWidth.scss
├─index.scss
├─marginPadding.scss
├─other.scss
├─position.scss
```

模板地址 [scss-template](https://github.com/yangfan0095/scss-template)

#### css-template 模板目录结构
```
css-template
├─index.css  未压缩版
├─index.min.css 压缩版
```

模板地址 [css-template](https://github.com/yangfan0095/css-template)


导入模板文件到本地可以根据自的需求自行使用，除此之外 我们将这个模板放在了npm包上，可以直接引入，支持自定义变量覆盖默认配置（推荐使用这个方法）

###  工具安装太麻烦？直接通过包引入 scss-package

#### scss-package 工具包

介绍： [scss-package](https://github.com/yangfan0095/scss-package) 一个公共scss库 解决css与业务组件解耦问题

### 直接使用scss-package 快速引入

step1: npm i scss-package --save

step2: 
* 可直接在项目中引入 import 'scss-package/index.scss' 即可使用默认配置

* 自定义配置变量覆盖默认设置，在项目中新建scss文件 index.scss, 在引入头部配置默认变量即可

```
// 自定义scss 变量设置
$color-list:(
(0,#fff),
(1,#333),
(2,#666),
(3,#999),
(4,#fb685d),
(5,#12C286),
(6,#E5E5E7),
);

$maxHeightWidth : 200;
@import '~scss-package/index.scss'

```
