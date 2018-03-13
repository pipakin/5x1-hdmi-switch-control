# 5x1-hdmi-switch-control
Control program for AGPTEK 5x1 HDMI switches with RS232 control (and similar units)


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
