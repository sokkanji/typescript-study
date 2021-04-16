// 인터페이스

// 옵션 속성 장점 -> 인터페이스 사용 할 시, 인터페이스에 정의되어있는 속성 모두 사용 안 해도 됨.
// interface CraftBeer {
//     name: string;
//     hop?: number;
// }

// let myBeer = {
//     name: 'Saporo'
// };

// function brewBeer(beer: CraftBeer) {
    // console.log(berr.brewery); 
    // 에러, 인터페이스에 정의 되어 있지 않은 속성
// }

// brewBeer(myBeer);

// 읽기 전용 속성 
// readonly 
// interface CraftBeer {
//     readonly brand: string;
// }

// let myBeer: CraftBeer = {
//     brand: 'Belgian Monk'
// };

// myBeer.brand = 'Korean Crapenter';
// 에러
