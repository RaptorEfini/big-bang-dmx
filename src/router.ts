export type RouteCallback = () => void;

export class Router {
  private routes = new Map<string, RouteCallback>();

  register(path: string, callback: RouteCallback) {
    this.routes.set(path, callback);
  }

  navigate(path: string) {
    history.pushState({}, '', path);
    this.handle(path);
  }

  start() {
    window.addEventListener('popstate', () => this.handle(location.pathname));
    this.handle(location.pathname);
  }

  private handle(path: string) {
    const cb = this.routes.get(path);
    if (cb) {
      cb();
    }
  }
}
