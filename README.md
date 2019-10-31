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


### 文件目录

```
├─scss-common
|      ├─border.scss 配置border
|      ├─color.scss  配置color
|      ├─default.scss 默认变量配置
|      ├─flex.scss 配置flex
|      ├─fontSize.scss 配置字体
|      ├─heightWidth.scss 配置高宽
|      ├─index.css scss打包成css
|      ├─index.min.css  sccs 打包成压缩css
|      ├─index.scss  入口
|      ├─marginPadding.scss 配置间距
|      ├─other.scss 配置其它
|      └position.scss 配置position
```
### 变量配置表

```
// border-radis 配置
$minBrs : 0;
$maxBrs : 150;
$brsList : 50,60;

// 配置颜色
$color-list:(
(0,#fff),
(1,#333),
(2,#666),
(3,#999),
);

// 配置flex
$minFlex : 0;
$maxFlex : 10;

// 配置字体大小
$minFontSize : 0;
$maxFontSize : 50;
$fontSizeList: 100,200,300,400,500,600;

// 配置宽高
$minHeightWidth : 0;
$maxHeightWidth : 150;
$heightWidthList : 160,170,180,190,200,250,300,350,400,45,500,550,600,700,800,900;

// 配置间距
$minMarginPadding : 0 ;
$maxMarginPadding : 30 ;
$marginPaddingList : 40,50,60,70,80;

// 配置距离
$minPosition : 0;
$maxPosition : 50;
$positionList :60,70,80,90,100;

```


####  \$minBrs、\$maxBrs、$brsList 渲染border-radius
```

$minBrs : 0 !default;
$maxBrs : 150 !default;
$brsList : 50,60 !default;


@for $num from $minBrs through $maxBrs {

@each $num in $heightWidthList{    

渲染以下属性
    .brs#{$num}{
        border-radius: #{$num}px;
    }
    .brs-t-l#{$num}{
        border-top-left-radius: #{$num}px !important;
    }
    .brs-t-r#{$num}{
        border-top-right-radius: #{$num}px !important;
    }
    .brs-b-l#{$num}{
        border-bottom-left-radius: #{$num}px !important;
    }
    .brs-b-r#{$num}{
        border-bottom-right-radius: #{$num}px !important;
    }

```

#### $color-list 渲染颜色
```

$color-list:(
(1,#4c84ff),
) !default;

@each $label,$value in $color-list {
    .col-#{$label} {
        color: $value
    };
    .bg-#{$label} {
        background:$value;
    }
}

```

#### more 可以直接看源文件 覆盖即可
[scss-package](https://github.com/yangfan0095/scss-package)


