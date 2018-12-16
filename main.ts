/**
 * BaiBit Control blocks
 */
//% weight=100 color=#0fbc11 icon=""
let baibitstrip: neopixel.Strip
let baibitcolor: number = 255 * 65536 + 255 * 256 + 255
let baibitbright: number = 20
let baipoint: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
namespace baibit {
    /**
     * TODO:BaiBitを初期化する
     */
    //% block
    export function init(): void {
        baibitstrip = neopixel.create(DigitalPin.P12, 25, NeoPixelMode.RGB)
        baibitstrip.setBrightness(baibitbright)
    }
    /**
     * TODO:LEDを点灯する
     * @param x 横方向。, eg: 0
     * @param y 縦方向。, eg: 0
     */
    //% block
    export function plot(x: number, y: number): void {
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
        return baipoint[x * 5 + y]
    }
    /**
     * TODO:全てのLEDを
     * @param led フォント。, eg: 0x0CF3FCC
     */
    //% block
    export function allled(led: number): void {
        for (let i = 0; i < 25; i++) {
            if (led & 1 << i) {
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
        baibitcolor = color
    }
    /**
     * TODO:LEDの明るさを設定する(0~255)
     * @param bright 明るさ(0~255)。, eg: 20
     */
    //% block
    export function brightness(bright: number): void {
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
        allled(hart)
    }

}