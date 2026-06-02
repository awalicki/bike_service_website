type RouteHandler = () => string;
type AfterRenderHook = () => void;

const routes: Record<string, RouteHandler> = {};
const afterRenderHooks: Record<string, AfterRenderHook> = {};

export const addRoute = (
  path: string,
  handler: RouteHandler,
  afterRender?: AfterRenderHook
) => {
  routes[path] = handler;
  if (afterRender) afterRenderHooks[path] = afterRender;
};

const getPath = (): string => {
  const hash = window.location.hash;
  if (!hash || hash === '#' || hash === '#/') return '/';
  return hash.slice(1); // '#/o-nas' → '/o-nas'
};

export const updateActiveLink = () => {
  const path = getPath();
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') ?? '';
    const linkPath = href.slice(1); // '#/' → '/'
    link.classList.toggle('nav-link--active', linkPath === path);
  });
};

const render = () => {
  const path = getPath();
  const handler = routes[path] ?? routes['/'];
  const main = document.querySelector<HTMLElement>('#main-content');
  if (main && handler) {
    main.innerHTML = handler();
    afterRenderHooks[path]?.();
  }
  updateActiveLink();
  window.scrollTo({ top: 0, behavior: 'instant' });
};

export const initRouter = () => {
  window.addEventListener('hashchange', render);
  render();
};
