import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class CustomRouterReuseStrategy implements RouteReuseStrategy {
    /**
     * paths stored with key as path of component
     */
    private handlers: { [key: string]: DetachedRouteHandle } = {};
    /**
     * decides whether to store path(component)
     */
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        const shouldDetach = localStorage.getItem('reuse-op');
        return !!shouldDetach && shouldDetach === 'store';
    }
    /**
     * stores the path/component
     */
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.handlers[this.getUrl(route)] = handle;
        console.log('storing route with key : ', this.getUrl(route));
        localStorage.setItem('reuse-op', '-');
    }
    /**
     * decides whether to attach the stored route/component if available
     */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        const shouldAttach = localStorage.getItem('reuse-op') === 'retrieve'
            && !!this.handlers[this.getUrl(route)];
        if (shouldAttach) {
            console.log('retrieving stored route with key : ', this.getUrl(route));
        }
        return shouldAttach;
    }
    /**
     * retrieves the path/component
     */
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {

        const retrieval = this.handlers[this.getUrl(route)];
        return retrieval;
    }
    /**
     * decides whether to re use route
     */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future?.routeConfig === curr?.routeConfig;
    }
    getUrl(route: ActivatedRouteSnapshot) {
        return route.url.join('/');
    }
}