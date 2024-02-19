import vhCheck from 'vh-check'

export default function() {
    // RESIZE IOS

    (function() {
        vhCheck({
            bind: false,
            redefineVh: true
        })
    }())
}
