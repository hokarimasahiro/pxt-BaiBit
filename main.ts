/**
 * BaiBit Control blocks
 */
//% weight=100 color=#0fbc11 icon=""
let initFlag = false
let baibitstrip: neopixel.Strip
let baibitcolor: number = 255 * 65536 + 255 * 256 + 255
let baibitbright: number = 20
let baipoint: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let baibitIcon: string[] = ["<N?N<", "0<6<0", "21248", "A:4:A", "29192", "1:2:1", "1:1:1", "C:3:C",
    "8:2:8", "0B5B0", "D447G", "HKAKH", "@A2D@", "@O?O@", "676ON", "8NN64",
    "4?N?4", "4><>4", "KK4KK", "9:L:9", "?FOF?", "02O20", "@O230", "<GOG<",
    ";IOH8", "HN2>8", "O7M70", "L676L", "33O00", "33O84", "L4O4L", "4>K>4",
    "26:62", "O9531", ":E:E:", "4:A:4", "04:40", "OAAAO", "0>:>0", "KK4:A"]
namespace baibit {
    /**
     * TODO:BaiBitを初期化する
     */
    //% block
    export function init(): void {
        baibitstrip = neopixel.create(DigitalPin.P12, 25, NeoPixelMode.RGB)
        baibitstrip.setBrightness(baibitbright)
        initFlag = true
    }
    /**
     * TODO:LEDを点灯する
     * @param x 横方向。, eg: 0
     * @param y 縦方向。, eg: 0
     */
    //% block
    export function plot(x: number, y: number): void {
        if (initFlag = false) init()
        baipoint[x * 5 + y] = true
        baibitstrip.setPixelColor(x * 5 + y, baibitcolor)
        baibitstrip.show()
    }
    /**
     * TODO:LEDを消灯する
     * @param x 横方向。, eg: 0
     * @param y 縦方向。, eg: 0
     */
    //% block
    export function unplot(x: number, y: number): void {
        if (initFlag = false) init()
        baipoint[x * 5 + y] = false
        baibitstrip.setPixelColor(x * 5 + y, 0)
        baibitstrip.show()
    }
    /**
     * TODO:LEDの点灯状態を調べる
     * @param x 横方向。, eg: 0
     * @param y 縦方向。, eg: 0
     */
    //% block
    export function point(x: number, y: number): boolean {
        if (initFlag = false) init()
        return baipoint[x * 5 + y]
    }
    /**
     * TODO:全てのLEDを
     * @param led フォント。, eg: 0x0CF3FCC
     */
    //% block
    export function allled(led: number): void {
        if (initFlag = false) init()
        for (let i = 0; i < 25; i++) {
            if (led & 1 << (24 - i)) {
                baipoint[i] = true
                baibitstrip.setPixelColor(i, baibitcolor)
            } else {
                baipoint[i] = false
                baibitstrip.setPixelColor(i, 0)
            }
        }
        baibitstrip.show()
    }
    /**
     * TODO:LEDをの色を設定する
     * @param color 色。, eg: 255
     */
    //% block
    export function color(color: number): void {
        if (initFlag = false) init()
        baibitcolor = color
    }
    /**
     * TODO:LEDの明るさを設定する(0~255)
     * @param bright 明るさ(0~255)。, eg: 20
     */
    //% block
    export function brightness(bright: number): void {
        if (initFlag = false) init()
        baibitbright = bright
        baibitstrip.setBrightness(bright)
    }
    let hart: number = 0x0CF3FCC
    /**
     * TODO:アイコンを表示する
     * @param iconno アイコンの番号。, eg: 1
     */
    //% block
    export function icon(iconno: number): void {
        if (initFlag = false) init()
        let wIcon = baibitIcon[iconno]
        for (let x = 0; x < 5; x++) {
            let aa = wIcon.charCodeAt(x) - 0x30
            for (let y = 0; y < 5; y++) {
                if((aa & 1<<(4-y))!=0) plot(x,y)
                else unplot(x,y)
            }
        }
    }










}