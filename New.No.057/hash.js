// 설치 명령어 **********************************
// npm i crypto-js
// **********************************************

//  crypto-js/sha256 모듈을 사용해서 암호화

const SHA256 = require("crypto-js/sha256");

// SHA256은 현재 블록체인에서 가장 많이 채택해서 사용하고있는 암호화 방식.
// 출력속도가 빠르다는 장점을 가지고 있고, 단방향성 암호화 방법이다.
// 복호화는 불가능하다.아직까진 안정성도 큰 단점이 발견 되진 않았다.
// SHA256 알고리즘으로 256비트로 구성된 64자리 문자열로 암호화 해준다.

const str = "안녕하세요";

console.log("hash : ", SHA256(str).toString(), SHA256(str).toString().length);
