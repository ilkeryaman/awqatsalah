import colorCode from "../resources/color-codes";
import { sslEnabled } from "./ssl-service";
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.SERVER_PORT;

const printRouteList = (router) => {
    console.log(colorCode.cyan, '=============================== ENDPOINT LIST ==============================')
    router.stack.forEach(printRoute.bind(null, []))
    console.log(colorCode.reset, '');
}

const printRoute = (path, layer) => {
    if (layer.route) {
        layer.route.stack.forEach(printRoute.bind(null, path.concat(split(layer.route.path))))
    } else if (layer.name === 'router' && layer.handle.stack) {
        layer.handle.stack.forEach(printRoute.bind(null, path.concat(split(layer.regexp))))
    } else if (layer.method) {
        const method = layer.method.toUpperCase();
        console.log(
            colorCode.yellow,
            '[' + method + ']',
            method === 'GET' ? '\t\t' : '\t',
            `${sslEnabled ? 'https': 'http'}://localhost:${port}/${path.concat(split(layer.regexp)).filter(Boolean).join('/')}`
        );
    }
}

const split = (thing) => {
    if (typeof thing === 'string') {
        return thing.split('/')
    } else if (thing.fast_slash) {
        return ''
    } else {
        var match = thing.toString()
            .replace('\\/?', '')
            .replace('(?=\\/|$)', '$')
            .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
        return match
            ? match[1].replace(/\\(.)/g, '$1').split('/')
            : '<complex:' + thing.toString() + '>'
    }
}

export default {
    printRouteList
}