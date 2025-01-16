// declare namespace Express {
//   type MyUser = import('../models/user').default;
//   interface User extends MyUser {}
// }

// interface User {
//   email: string;
//   role: string;
// }

declare namespace Express {
  interface User {
    email: string
    role: string
  }
}