# 5x1-hdmi-switch-control
Control program for AGPTEK 5x1 HDMI switches with RS232 control (and similar units)

## Supported Hardware

* [AGPtEK Slim 4K 5x1 HDMI Switch HDMI 2.0 with Wireless IR Remote Controller, Auto EDID, Support 4k x 2k and 3D and RS232 Control,5 in 1 out splitter](https://www.amazon.com/gp/product/B01N19RFYW)
* [E-SDS UHD 4K@60Hz HDMI Switch ,5x1 HDMI Switch with IR Wireless Remote, Auto EDID, HDMI 2.0, HDCP 2.2, and RS232](https://www.amazon.com/gp/product/B01FXALWYY)


## Installation

```
npm install -g hdmi-switch-control
```

## Usage

By default it will use the first COM port it finds. In the VERY likely event this is wrong, you can use the `--port yourportpath` to specify a port.

### Turn unit on
```
hdmi-switch-control --turnon
```

### Turn unit off

```
hdmi-switch-control --turnoff
```

### Switch to a specific display

```
hdmi-switch-control --input X
```
Where X is 1-5
