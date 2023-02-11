interface User006 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  finishTrail(): string; // * it will add func icon on suggestion
  getCoupon(couponName: string): number;
}

// * re-opening of interface
interface User006 {
  githubToken: string;
}

// * Extends
interface Admin3256 extends User006 {
  role: "teacher" | "learner" | "researcher";
}

const srUser: Admin3256 = {
  role: "researcher",
  githubToken: "xfdygfjbcujhdbuc",
  dbId: 203,
  email: "s@s.com",
  userId: 235,
  startTrail: () => {
    return "startTrail done";
  },
  finishTrail() {
    return "finishTrail done";
  },
  getCoupon: (name: string) => {
    return name.length;
  },
};

console.log((srUser.email = "s@mail.com"));
console.log(srUser);

console.log(srUser.getCoupon("srCoupon"));
console.log(srUser.startTrail());
console.log(srUser.finishTrail());
