window.onload = function () {
    /**
     * MD5 Encryption function to encrypt provided string.
     * Returns string of encrypted hash.
     * @param {string} stringIn
     */

    function md5Encrypt(stringIn) {
        "use strict";
        var md5string = new CryptoJS.MD5(stringIn);
        var md5data = md5string.toString()
        return md5data;
    }


    //END md5Encrypt
}