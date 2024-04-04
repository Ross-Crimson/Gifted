import { AccountController } from "./controllers/AccountController.js";
import { GiftsController } from "./controllers/GiftsController.js";
import { GifyController } from "./controllers/GifyController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [GiftsController, GifyController],
    view: 'app/views/GiftView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




