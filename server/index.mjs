globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { a as toEventHandler, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region ../../dev-server/node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-DqGYmLeG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3af8-L3OtPJf5Wzgjq+cJNG1gtiB0StY\"",
		"mtime": "2026-09-30T06:07:49.956Z",
		"size": 15096,
		"path": "../public/assets/about-DqGYmLeG.js"
	},
	"/assets/aigis-site-chrome-Dt_p7G-e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2070-U4mhA/tgtpggTTDiGLTAQPGwWIo\"",
		"mtime": "2026-09-30T06:07:49.956Z",
		"size": 8304,
		"path": "../public/assets/aigis-site-chrome-Dt_p7G-e.js"
	},
	"/assets/contact-KFWxwmv5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4323-pFgS1Zghk6NwcOOOUGkUYUcLMDM\"",
		"mtime": "2026-09-30T06:07:49.956Z",
		"size": 17187,
		"path": "../public/assets/contact-KFWxwmv5.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-30T06:07:50.667Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"c61-FLJ09c6rhzlUXM5PSE6agIxJaLE\"",
		"mtime": "2026-09-30T06:07:50.667Z",
		"size": 3169,
		"path": "../public/favicon.png"
	},
	"/assets/domains-BxURXC-7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"550e-Ykj5mGqX+yGzt5zTbP297JoAzU4\"",
		"mtime": "2026-09-30T06:07:49.956Z",
		"size": 21774,
		"path": "../public/assets/domains-BxURXC-7.js"
	},
	"/assets/aigis-drone-hero-D2NWrKom.jpg": {
		"type": "image/jpeg",
		"etag": "\"38156-M39sseeGiBoPkmi8/Ag08L1nRBY\"",
		"mtime": "2026-09-30T06:07:49.959Z",
		"size": 229718,
		"path": "../public/assets/aigis-drone-hero-D2NWrKom.jpg"
	},
	"/assets/solutions-multidomain-core-GVuqJkZ8.jpg": {
		"type": "image/jpeg",
		"etag": "\"31799-yFvCiQnmDHFZzD+6Zp/BA2D5Gzo\"",
		"mtime": "2026-09-30T06:07:49.961Z",
		"size": 202649,
		"path": "../public/assets/solutions-multidomain-core-GVuqJkZ8.jpg"
	},
	"/assets/routes-C0w4dQ-4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7375-yrLXP1BEUq5y5SSYaWBj6Z3C+9k\"",
		"mtime": "2026-09-30T06:07:49.956Z",
		"size": 29557,
		"path": "../public/assets/routes-C0w4dQ-4.js"
	},
	"/assets/arunjith-nambiar-DY35s4Tm.png": {
		"type": "image/png",
		"etag": "\"3d85d-wkeOFmo9HiYW8HTqRVv5PrK8PXY\"",
		"mtime": "2026-09-30T06:07:49.960Z",
		"size": 251997,
		"path": "../public/assets/arunjith-nambiar-DY35s4Tm.png"
	},
	"/assets/index-bmLZFz27.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7ad0a-aPI6KTivs2DzouczuJ2sc2VYTPM\"",
		"mtime": "2026-09-30T06:07:49.956Z",
		"size": 503050,
		"path": "../public/assets/index-bmLZFz27.js"
	},
	"/assets/styles-B69Sc6rk.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"21e19-XpELH18b/FFbxdadq/sSRXHowIg\"",
		"mtime": "2026-09-30T06:07:49.961Z",
		"size": 138777,
		"path": "../public/assets/styles-B69Sc6rk.css"
	},
	"/assets/solutions-CNF01c2w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4795-YX1vDfOCy/eeTj3jrMRUuhLKfG4\"",
		"mtime": "2026-09-30T06:07:49.956Z",
		"size": 18325,
		"path": "../public/assets/solutions-CNF01c2w.js"
	},
	"/assets/technology-BnHaZlFy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6801-gwaEyC0U7Y7oHQWGE1N8U26niFE\"",
		"mtime": "2026-09-30T06:07:49.956Z",
		"size": 26625,
		"path": "../public/assets/technology-BnHaZlFy.js"
	},
	"/__l5e/assets-v1/22b4765a-9f67-4d69-95cb-110b57bf9233/arunjith-nambiar.png": {
		"type": "image/png",
		"etag": "\"3d85d-wkeOFmo9HiYW8HTqRVv5PrK8PXY\"",
		"mtime": "2026-09-30T06:07:50.671Z",
		"size": 251997,
		"path": "../public/__l5e/assets-v1/22b4765a-9f67-4d69-95cb-110b57bf9233/arunjith-nambiar.png"
	},
	"/__l5e/assets-v1/0bd27f4d-0e81-4595-92d0-5ed1af0f906c/aigis-logo-navy.png": {
		"type": "image/png",
		"etag": "\"2376-wyiZEatRf4dqTyrZnnBvIzCNwFk\"",
		"mtime": "2026-09-30T06:07:50.699Z",
		"size": 9078,
		"path": "../public/__l5e/assets-v1/0bd27f4d-0e81-4595-92d0-5ed1af0f906c/aigis-logo-navy.png"
	},
	"/assets/vishnu-mohan-DuxK5Pgx.png": {
		"type": "image/png",
		"etag": "\"d0d20-5bULeKaQtL2mT6OMexniceYdZj8\"",
		"mtime": "2026-09-30T06:07:49.961Z",
		"size": 855328,
		"path": "../public/assets/vishnu-mohan-DuxK5Pgx.png"
	},
	"/__l5e/assets-v1/0f3997e9-3879-4e75-89a7-550e516f959f/vishnu-mohan.png": {
		"type": "image/png",
		"etag": "\"d0d20-5bULeKaQtL2mT6OMexniceYdZj8\"",
		"mtime": "2026-09-30T06:07:50.669Z",
		"size": 855328,
		"path": "../public/__l5e/assets-v1/0f3997e9-3879-4e75-89a7-550e516f959f/vishnu-mohan.png"
	},
	"/__l5e/assets-v1/310f08f7-5d0c-41ea-af51-cf89e6e6c49e/aigis-domain-air-isr.webm": {
		"type": "video/webm",
		"etag": "\"533fd-2NqsCiG32zlEKpsHURUone667j4\"",
		"mtime": "2026-09-30T06:07:50.697Z",
		"size": 340989,
		"path": "../public/__l5e/assets-v1/310f08f7-5d0c-41ea-af51-cf89e6e6c49e/aigis-domain-air-isr.webm"
	},
	"/__l5e/assets-v1/28600e88-5ca5-4c8f-9f8c-e5f98b835f47/home-domain-homeland.webm": {
		"type": "video/webm",
		"etag": "\"1c498c-xsS35y7X1nAko1AQ2VBqTpYSGOs\"",
		"mtime": "2026-09-30T06:07:50.675Z",
		"size": 1853836,
		"path": "../public/__l5e/assets-v1/28600e88-5ca5-4c8f-9f8c-e5f98b835f47/home-domain-homeland.webm"
	},
	"/assets/aigis-drone-hero-DTsoc191.webm": {
		"type": "video/webm",
		"etag": "\"29b46f-lljQqhFlxKWepv3qcCFLD2jVs7Q\"",
		"mtime": "2026-09-30T06:07:49.960Z",
		"size": 2733167,
		"path": "../public/assets/aigis-drone-hero-DTsoc191.webm"
	},
	"/__l5e/assets-v1/095d78f8-d616-4f0c-9964-60c5f46ff28d/aigis-solution-autonomy-drone.mp4": {
		"type": "video/mp4",
		"etag": "\"2c2369-w9c+5jicV+tUM+MQdfkL7j2fOeY\"",
		"mtime": "2026-09-30T06:07:50.671Z",
		"size": 2892649,
		"path": "../public/__l5e/assets-v1/095d78f8-d616-4f0c-9964-60c5f46ff28d/aigis-solution-autonomy-drone.mp4"
	},
	"/__l5e/assets-v1/2944789b-e933-4807-8fc6-d03087559d12/aigis-solutions-hero.webm": {
		"type": "video/webm",
		"etag": "\"17e2ad-t7oUr0vbn9vZbXfmcxqKxe6qWJs\"",
		"mtime": "2026-09-30T06:07:50.692Z",
		"size": 1565357,
		"path": "../public/__l5e/assets-v1/2944789b-e933-4807-8fc6-d03087559d12/aigis-solutions-hero.webm"
	},
	"/__l5e/assets-v1/55b20a52-3ce0-4807-a853-e0b8d74cb14c/how-aigis-works.webm": {
		"type": "video/webm",
		"etag": "\"cd9fa-nwII6iH+zEXqgbXu4RHgVj32igk\"",
		"mtime": "2026-09-30T06:07:50.680Z",
		"size": 842234,
		"path": "../public/__l5e/assets-v1/55b20a52-3ce0-4807-a853-e0b8d74cb14c/how-aigis-works.webm"
	},
	"/__l5e/assets-v1/3ba586a4-76c4-49c1-9502-65f3c1b02644/how-aigis-works.mp4": {
		"type": "video/mp4",
		"etag": "\"142ae8-pD07/VB1+KZM7ar6uWa6vfpoSVs\"",
		"mtime": "2026-09-30T06:07:50.675Z",
		"size": 1321704,
		"path": "../public/__l5e/assets-v1/3ba586a4-76c4-49c1-9502-65f3c1b02644/how-aigis-works.mp4"
	},
	"/assets/aigis-contact-hero-BacU1U-O.webm": {
		"type": "video/webm",
		"etag": "\"30cc2d-WZ3LQKfFTLX6hWDWHS4qAO5SFak\"",
		"mtime": "2026-09-30T06:07:49.958Z",
		"size": 3197997,
		"path": "../public/assets/aigis-contact-hero-BacU1U-O.webm"
	},
	"/__l5e/assets-v1/4d859927-6f7f-4005-8c84-328836dc7cee/aigis-autonomy-desert.webm": {
		"type": "video/webm",
		"etag": "\"16a46f-laAMpUVrvEBXFWWsAB/9aqmDzDk\"",
		"mtime": "2026-09-30T06:07:50.677Z",
		"size": 1483887,
		"path": "../public/__l5e/assets-v1/4d859927-6f7f-4005-8c84-328836dc7cee/aigis-autonomy-desert.webm"
	},
	"/__l5e/assets-v1/2d4c6262-e03a-4815-a7fc-97f39446a505/home-domain-naval.webm": {
		"type": "video/webm",
		"etag": "\"18aef1-DTZ7rjaM+4/TJn51p0gQhMh+Td0\"",
		"mtime": "2026-09-30T06:07:50.672Z",
		"size": 1617649,
		"path": "../public/__l5e/assets-v1/2d4c6262-e03a-4815-a7fc-97f39446a505/home-domain-naval.webm"
	},
	"/__l5e/assets-v1/52e26a62-901d-4f82-a664-52e0e9a00462/about-hero.webm": {
		"type": "video/webm",
		"etag": "\"1c4667-jVlMQ6AL1iLRPG1Cz38vv/1pUqI\"",
		"mtime": "2026-09-30T06:07:50.678Z",
		"size": 1853031,
		"path": "../public/__l5e/assets-v1/52e26a62-901d-4f82-a664-52e0e9a00462/about-hero.webm"
	},
	"/__l5e/assets-v1/54db81b0-6a84-4a98-ace0-862586502e37/flow-perception.webm": {
		"type": "video/webm",
		"etag": "\"181ee1-A6J0JNZwD7jSybXPuwq9CnI7lXs\"",
		"mtime": "2026-09-30T06:07:50.680Z",
		"size": 1580769,
		"path": "../public/__l5e/assets-v1/54db81b0-6a84-4a98-ace0-862586502e37/flow-perception.webm"
	},
	"/__l5e/assets-v1/6b9e828b-347d-4648-bbc2-f7aee8afded8/aigis-cyber-security.webm": {
		"type": "video/webm",
		"etag": "\"1cd1b7-Lf+n9yCs3QWMlvnXn64XcxZ8zzQ\"",
		"mtime": "2026-09-30T06:07:50.683Z",
		"size": 1888695,
		"path": "../public/__l5e/assets-v1/6b9e828b-347d-4648-bbc2-f7aee8afded8/aigis-cyber-security.webm"
	},
	"/__l5e/assets-v1/32e6c0e9-ca6f-4897-839b-9250a07c080c/home-domain-land.webm": {
		"type": "video/webm",
		"etag": "\"1d1728-kwODeEle5Yu2AvIpEby9NXTdX8I\"",
		"mtime": "2026-09-30T06:07:50.676Z",
		"size": 1906472,
		"path": "../public/__l5e/assets-v1/32e6c0e9-ca6f-4897-839b-9250a07c080c/home-domain-land.webm"
	},
	"/__l5e/assets-v1/4ba5a05e-1aca-425a-819c-41f6e8b9120e/aigis-technology-hero.webm": {
		"type": "video/webm",
		"etag": "\"207576-zHBvf1z7CtUm0NCB36rbjQblrZs\"",
		"mtime": "2026-09-30T06:07:50.676Z",
		"size": 2127222,
		"path": "../public/__l5e/assets-v1/4ba5a05e-1aca-425a-819c-41f6e8b9120e/aigis-technology-hero.webm"
	},
	"/__l5e/assets-v1/6f82ec3a-69f2-490e-8b22-f8a5257220d1/aigis-logo.png": {
		"type": "image/png",
		"etag": "\"2619-letEXvjJIKL1RXRBT/VYn+zTTJI\"",
		"mtime": "2026-09-30T06:07:50.683Z",
		"size": 9753,
		"path": "../public/__l5e/assets-v1/6f82ec3a-69f2-490e-8b22-f8a5257220d1/aigis-logo.png"
	},
	"/__l5e/assets-v1/1fa773d9-324c-481d-858e-ac45647c833c/aigis-solutions-hero.mp4": {
		"type": "video/mp4",
		"etag": "\"4e8c9d-+VTYLZ117RNhzMpmuGM7kEqMZjE\"",
		"mtime": "2026-09-30T06:07:50.706Z",
		"size": 5147805,
		"path": "../public/__l5e/assets-v1/1fa773d9-324c-481d-858e-ac45647c833c/aigis-solutions-hero.mp4"
	},
	"/__l5e/assets-v1/67c2d81c-0c52-4cb0-b6e2-42e4cd8c310d/how-aigis-works-cinematic.webm": {
		"type": "video/webm",
		"etag": "\"2d3523-yyElkPb5wNjWVlbdp0I9sXPNlac\"",
		"mtime": "2026-09-30T06:07:50.681Z",
		"size": 2962723,
		"path": "../public/__l5e/assets-v1/67c2d81c-0c52-4cb0-b6e2-42e4cd8c310d/how-aigis-works-cinematic.webm"
	},
	"/__l5e/assets-v1/34aa3687-d69f-465a-a4f9-9f047f9a6732/flow-decision.mp4": {
		"type": "video/mp4",
		"etag": "\"31a14c-qQ/NG6NB50BOq1GYKO0sKSqILcA\"",
		"mtime": "2026-09-30T06:07:50.679Z",
		"size": 3252556,
		"path": "../public/__l5e/assets-v1/34aa3687-d69f-465a-a4f9-9f047f9a6732/flow-decision.mp4"
	},
	"/__l5e/assets-v1/678e41fb-cd63-4046-a885-e35389ea5666/flow-decision.webm": {
		"type": "video/webm",
		"etag": "\"1bbfdb-EmJpQtPN1sdXRzQs1bq8D8TNXag\"",
		"mtime": "2026-09-30T06:07:50.681Z",
		"size": 1818587,
		"path": "../public/__l5e/assets-v1/678e41fb-cd63-4046-a885-e35389ea5666/flow-decision.webm"
	},
	"/__l5e/assets-v1/2766eebd-1eb4-4650-9265-510d2c4f3827/home-domain-air.mp4": {
		"type": "video/mp4",
		"etag": "\"3b4afa-gM9bubix5u785KaSYGmXUc5jp98\"",
		"mtime": "2026-09-30T06:07:50.676Z",
		"size": 3885818,
		"path": "../public/__l5e/assets-v1/2766eebd-1eb4-4650-9265-510d2c4f3827/home-domain-air.mp4"
	},
	"/__l5e/assets-v1/6d462bff-4b47-4993-b9ea-71ac6fba2f84/home-domain-cyber.webm": {
		"type": "video/webm",
		"etag": "\"16d610-8z3Gl+SxztOZ87wG9vIz+JtN4B0\"",
		"mtime": "2026-09-30T06:07:50.683Z",
		"size": 1496592,
		"path": "../public/__l5e/assets-v1/6d462bff-4b47-4993-b9ea-71ac6fba2f84/home-domain-cyber.webm"
	},
	"/__l5e/assets-v1/7de5d428-2995-4b0d-be99-23697bc3e415/aigis-solution-command-drone.webm": {
		"type": "video/webm",
		"etag": "\"1325bb-6OKA/S/UeT1f2CGeJsKzPWZBG4Y\"",
		"mtime": "2026-09-30T06:07:50.691Z",
		"size": 1254843,
		"path": "../public/__l5e/assets-v1/7de5d428-2995-4b0d-be99-23697bc3e415/aigis-solution-command-drone.webm"
	},
	"/__l5e/assets-v1/186c3612-6076-47dc-b244-7f9966f9efe8/aigis-domain-maritime.mp4": {
		"type": "video/mp4",
		"etag": "\"5c598c-U34nhTipkogD3HAHBVXQbc7S76Q\"",
		"mtime": "2026-09-30T06:07:50.674Z",
		"size": 6052236,
		"path": "../public/__l5e/assets-v1/186c3612-6076-47dc-b244-7f9966f9efe8/aigis-domain-maritime.mp4"
	},
	"/__l5e/assets-v1/a4b0da7b-1137-4e51-860a-5a57b76b03d5/aigis-solution-autonomy-drone.webm": {
		"type": "video/webm",
		"etag": "\"9905b-NAt/lY91u4ttVme2Z43ojsTpLxU\"",
		"mtime": "2026-09-30T06:07:50.695Z",
		"size": 626779,
		"path": "../public/__l5e/assets-v1/a4b0da7b-1137-4e51-860a-5a57b76b03d5/aigis-solution-autonomy-drone.webm"
	},
	"/__l5e/assets-v1/87a18a46-4e67-4c7d-ae5a-a6a6c25909d7/aigis-sustainment.webm": {
		"type": "video/webm",
		"etag": "\"16fedd-cS64+pXEGxlhDVhUudI3rxwgMPA\"",
		"mtime": "2026-09-30T06:07:50.686Z",
		"size": 1507037,
		"path": "../public/__l5e/assets-v1/87a18a46-4e67-4c7d-ae5a-a6a6c25909d7/aigis-sustainment.webm"
	},
	"/__l5e/assets-v1/1a544102-4d69-4529-9bf6-791c17dc00ca/aigis-domain-land.mp4": {
		"type": "video/mp4",
		"etag": "\"61e406-aiiXQcPxCMIIH2nGoMVFGQpdRbM\"",
		"mtime": "2026-09-30T06:07:50.686Z",
		"size": 6415366,
		"path": "../public/__l5e/assets-v1/1a544102-4d69-4529-9bf6-791c17dc00ca/aigis-domain-land.mp4"
	},
	"/__l5e/assets-v1/582ef27f-bf71-4db3-a2ee-ce6d6fb55203/aigis-domains-hero.webm": {
		"type": "video/webm",
		"etag": "\"1b2499-VbO6W3Y40rhqRNqZ5gEYLT6QlGg\"",
		"mtime": "2026-09-30T06:07:50.692Z",
		"size": 1778841,
		"path": "../public/__l5e/assets-v1/582ef27f-bf71-4db3-a2ee-ce6d6fb55203/aigis-domains-hero.webm"
	},
	"/__l5e/assets-v1/aa4be26c-2718-4d9f-bdbc-257cd01efc4c/aigis-domain-cyber.webm": {
		"type": "video/webm",
		"etag": "\"f2ad0-hG+s46I9MpN9/mwyuRczmzDt3gw\"",
		"mtime": "2026-09-30T06:07:50.699Z",
		"size": 994e3,
		"path": "../public/__l5e/assets-v1/aa4be26c-2718-4d9f-bdbc-257cd01efc4c/aigis-domain-cyber.webm"
	},
	"/__l5e/assets-v1/99560554-13e9-4c0f-88ed-db81ffa81d44/aigis-domain-land.webm": {
		"type": "video/webm",
		"etag": "\"251e4a-JKcV8Y/73UbNc6EATiZxVo9SbLA\"",
		"mtime": "2026-09-30T06:07:50.697Z",
		"size": 2432586,
		"path": "../public/__l5e/assets-v1/99560554-13e9-4c0f-88ed-db81ffa81d44/aigis-domain-land.webm"
	},
	"/__l5e/assets-v1/b244f261-4990-4fed-a105-7c3b275b5e0c/home-domain-air.webm": {
		"type": "video/webm",
		"etag": "\"15cace-Rhb1SDjrUreRnZqjKjOINoRdSOM\"",
		"mtime": "2026-09-30T06:07:50.699Z",
		"size": 1428174,
		"path": "../public/__l5e/assets-v1/b244f261-4990-4fed-a105-7c3b275b5e0c/home-domain-air.webm"
	},
	"/__l5e/assets-v1/9867dea9-2af9-44f7-b475-723c57ee6dc4/aigis-domain-air-isr.mp4": {
		"type": "video/mp4",
		"etag": "\"20c4da-zLAM+sw3NkLRkGHmKx0cI8Ylf9Y\"",
		"mtime": "2026-09-30T06:07:50.694Z",
		"size": 2147546,
		"path": "../public/__l5e/assets-v1/9867dea9-2af9-44f7-b475-723c57ee6dc4/aigis-domain-air-isr.mp4"
	},
	"/__l5e/assets-v1/4dc77a58-88dc-4483-bf4b-634d2a0d6061/home-domain-naval.mp4": {
		"type": "video/mp4",
		"etag": "\"658ffa-z6gCdPL93rIjETvNzts7hMaaVvc\"",
		"mtime": "2026-09-30T06:07:50.686Z",
		"size": 6655994,
		"path": "../public/__l5e/assets-v1/4dc77a58-88dc-4483-bf4b-634d2a0d6061/home-domain-naval.mp4"
	},
	"/__l5e/assets-v1/749618ae-6a73-4127-b1cd-02d90ea16996/aigis-domain-sustainment.mp4": {
		"type": "video/mp4",
		"etag": "\"3c38fc-cL+JrTYcgIo6xJRkF/XeVfh3LAQ\"",
		"mtime": "2026-09-30T06:07:50.702Z",
		"size": 3946748,
		"path": "../public/__l5e/assets-v1/749618ae-6a73-4127-b1cd-02d90ea16996/aigis-domain-sustainment.mp4"
	},
	"/__l5e/assets-v1/2ee29131-28c4-4d01-8bd0-a332814fd748/aigis-autonomy-desert.mp4": {
		"type": "video/mp4",
		"etag": "\"735632-WcfFZjY/TpYqvNii2vONzrBnu2I\"",
		"mtime": "2026-09-30T06:07:50.712Z",
		"size": 7558706,
		"path": "../public/__l5e/assets-v1/2ee29131-28c4-4d01-8bd0-a332814fd748/aigis-autonomy-desert.mp4"
	},
	"/__l5e/assets-v1/7b076375-9072-4230-a1a4-d07431d7d59b/aigis-solution-command-drone.mp4": {
		"type": "video/mp4",
		"etag": "\"43c79c-Z2KylFYa5XX4NPPkzNsyvoL79rM\"",
		"mtime": "2026-09-30T06:07:50.703Z",
		"size": 4442012,
		"path": "../public/__l5e/assets-v1/7b076375-9072-4230-a1a4-d07431d7d59b/aigis-solution-command-drone.mp4"
	},
	"/__l5e/assets-v1/d26b25c3-77d7-4222-9701-a03203c6b875/aigis-maritime-dawn.webm": {
		"type": "video/webm",
		"etag": "\"171907-N78JlzVwHGREocTVyBz0HWjY3k0\"",
		"mtime": "2026-09-30T06:07:50.668Z",
		"size": 1513735,
		"path": "../public/__l5e/assets-v1/d26b25c3-77d7-4222-9701-a03203c6b875/aigis-maritime-dawn.webm"
	},
	"/__l5e/assets-v1/c54fed1c-68cd-425d-a149-12bf916c17a3/aigis-solution-readiness-drone.webm": {
		"type": "video/webm",
		"etag": "\"1b2788-/UKjFxqfvPY3Uf1vtadLdyY9Dpk\"",
		"mtime": "2026-09-30T06:07:50.722Z",
		"size": 1779592,
		"path": "../public/__l5e/assets-v1/c54fed1c-68cd-425d-a149-12bf916c17a3/aigis-solution-readiness-drone.webm"
	},
	"/__l5e/assets-v1/5a4f0244-b4d5-4192-8f90-0d279b8b9f37/aigis-technology-hero.mp4": {
		"type": "video/mp4",
		"etag": "\"4daae9-Z3omGDmhjksg0txe469B15MX7eM\"",
		"mtime": "2026-09-30T06:07:50.691Z",
		"size": 5090025,
		"path": "../public/__l5e/assets-v1/5a4f0244-b4d5-4192-8f90-0d279b8b9f37/aigis-technology-hero.mp4"
	},
	"/__l5e/assets-v1/4e10490b-dff6-492f-aace-607737c99aa3/aigis-contact-hero.mp4": {
		"type": "video/mp4",
		"etag": "\"7915c1-+bMiDm6vSG0qOPN9hvH7fuRy6Vo\"",
		"mtime": "2026-09-30T06:07:50.682Z",
		"size": 7935425,
		"path": "../public/__l5e/assets-v1/4e10490b-dff6-492f-aace-607737c99aa3/aigis-contact-hero.mp4"
	},
	"/__l5e/assets-v1/c4dfa285-155d-42d3-a526-b369b3378ee4/aigis-domain-maritime.webm": {
		"type": "video/webm",
		"etag": "\"25c2ac-z4SKWGI7683cGuQpWmXfVotMJdA\"",
		"mtime": "2026-09-30T06:07:50.705Z",
		"size": 2474668,
		"path": "../public/__l5e/assets-v1/c4dfa285-155d-42d3-a526-b369b3378ee4/aigis-domain-maritime.webm"
	},
	"/__l5e/assets-v1/b8acd53b-8808-4f30-b6b4-e991d5cd5448/aigis-domain-command.webm": {
		"type": "video/webm",
		"etag": "\"1d21ef-+ptATV2cV0lqU21vu3Qiz3+4CJc\"",
		"mtime": "2026-09-30T06:07:50.714Z",
		"size": 1909231,
		"path": "../public/__l5e/assets-v1/b8acd53b-8808-4f30-b6b4-e991d5cd5448/aigis-domain-command.webm"
	},
	"/__l5e/assets-v1/d1e824f9-6c03-4296-ad67-9a1dd06371bd/aigis-inside-drone.webm": {
		"type": "video/webm",
		"etag": "\"1d0823-fV4DIRgUcr9R8BqWTuAnuvjXy5M\"",
		"mtime": "2026-09-30T06:07:50.708Z",
		"size": 1902627,
		"path": "../public/__l5e/assets-v1/d1e824f9-6c03-4296-ad67-9a1dd06371bd/aigis-inside-drone.webm"
	},
	"/__l5e/assets-v1/a6af70e1-373f-4e7a-b571-2bb619565158/aigis-command-center.mp4": {
		"type": "video/mp4",
		"etag": "\"3d1db0-B2LVNXRLWEJ9DyHVd4oB3i/FgpE\"",
		"mtime": "2026-09-30T06:07:50.698Z",
		"size": 4005296,
		"path": "../public/__l5e/assets-v1/a6af70e1-373f-4e7a-b571-2bb619565158/aigis-command-center.mp4"
	},
	"/__l5e/assets-v1/722051c9-d2a0-429d-91db-8aceb329ffd7/aigis-domain-command.mp4": {
		"type": "video/mp4",
		"etag": "\"543f08-M0ma0j0dXElTmAQcqI2oNOc55sM\"",
		"mtime": "2026-09-30T06:07:50.697Z",
		"size": 5521160,
		"path": "../public/__l5e/assets-v1/722051c9-d2a0-429d-91db-8aceb329ffd7/aigis-domain-command.mp4"
	},
	"/__l5e/assets-v1/87ce5bf8-7bba-46fa-a5fe-c6508ce917dd/aigis-domains-hero.mp4": {
		"type": "video/mp4",
		"etag": "\"46bb34-rwGNS/4xaa3/YBAtzKxdP0ubAIg\"",
		"mtime": "2026-09-30T06:07:50.696Z",
		"size": 4635444,
		"path": "../public/__l5e/assets-v1/87ce5bf8-7bba-46fa-a5fe-c6508ce917dd/aigis-domains-hero.mp4"
	},
	"/__l5e/assets-v1/d09d9c29-851e-4274-a3db-35d8ec9c78e9/aigis-sustainment.mp4": {
		"type": "video/mp4",
		"etag": "\"3986b0-+Q78u9h6psNadYtMoyIwx7whiDI\"",
		"mtime": "2026-09-30T06:07:50.706Z",
		"size": 3770032,
		"path": "../public/__l5e/assets-v1/d09d9c29-851e-4274-a3db-35d8ec9c78e9/aigis-sustainment.mp4"
	},
	"/__l5e/assets-v1/b0235740-6b1f-49cd-a436-0f4ae9be3079/aigis-cyber-security.mp4": {
		"type": "video/mp4",
		"etag": "\"51fb03-7bFANJPd3viSUehApZElKsoxfxs\"",
		"mtime": "2026-09-30T06:07:50.702Z",
		"size": 5372675,
		"path": "../public/__l5e/assets-v1/b0235740-6b1f-49cd-a436-0f4ae9be3079/aigis-cyber-security.mp4"
	},
	"/__l5e/assets-v1/e2d2ace5-7754-4ba5-afc0-e21845f00017/flow-fleet.webm": {
		"type": "video/webm",
		"etag": "\"1ab797-8M0rtbb/GbvQXfqtufnaFdq6L2c\"",
		"mtime": "2026-09-30T06:07:50.721Z",
		"size": 1750935,
		"path": "../public/__l5e/assets-v1/e2d2ace5-7754-4ba5-afc0-e21845f00017/flow-fleet.webm"
	},
	"/__l5e/assets-v1/0476b05f-6287-4f89-a662-c3e6d0ad99ff/home-domain-land.mp4": {
		"type": "video/mp4",
		"etag": "\"99a3b3-gH8rQ4EvveMGfktwT4UDZwb9NWI\"",
		"mtime": "2026-09-30T06:07:50.679Z",
		"size": 10068915,
		"path": "../public/__l5e/assets-v1/0476b05f-6287-4f89-a662-c3e6d0ad99ff/home-domain-land.mp4"
	},
	"/__l5e/assets-v1/f47de8e3-4d22-43f1-8930-81ad13bdcad8/aigis-domain-sustainment.webm": {
		"type": "video/webm",
		"etag": "\"130a42-EuP9F56BGhllBB8zbQVo7wEYhPE\"",
		"mtime": "2026-09-30T06:07:50.715Z",
		"size": 1247810,
		"path": "../public/__l5e/assets-v1/f47de8e3-4d22-43f1-8930-81ad13bdcad8/aigis-domain-sustainment.webm"
	},
	"/__l5e/assets-v1/aed7969b-f7be-4b17-b46d-ef068b04f1ba/aigis-solution-readiness-drone.mp4": {
		"type": "video/mp4",
		"etag": "\"4c493d-+yCt3t0ciRFX+yfIHpYfZrtUFbU\"",
		"mtime": "2026-09-30T06:07:50.701Z",
		"size": 4999485,
		"path": "../public/__l5e/assets-v1/aed7969b-f7be-4b17-b46d-ef068b04f1ba/aigis-solution-readiness-drone.mp4"
	},
	"/__l5e/assets-v1/d93ee793-4aee-4075-b4da-92ba18859e00/aigis-command-center.webm": {
		"type": "video/webm",
		"etag": "\"1a8255-HGR0qoSAMXJDSNKRvfD6mCM4VIs\"",
		"mtime": "2026-09-30T06:07:50.706Z",
		"size": 1737301,
		"path": "../public/__l5e/assets-v1/d93ee793-4aee-4075-b4da-92ba18859e00/aigis-command-center.webm"
	},
	"/__l5e/assets-v1/e1973ab1-1425-48d3-949a-906457d384ee/aigis-domain-cyber.mp4": {
		"type": "video/mp4",
		"etag": "\"3884d1-PFVD1ebsVMmhYaf6SsSm2iRXFRk\"",
		"mtime": "2026-09-30T06:07:50.710Z",
		"size": 3704017,
		"path": "../public/__l5e/assets-v1/e1973ab1-1425-48d3-949a-906457d384ee/aigis-domain-cyber.mp4"
	},
	"/__l5e/assets-v1/ca81a0a3-9b63-4ce5-a322-303f1caa2a1e/home-domain-cyber.mp4": {
		"type": "video/mp4",
		"etag": "\"53612a-tH+4ued0wHgMJEAbi3Mjlt7zJ08\"",
		"mtime": "2026-09-30T06:07:50.711Z",
		"size": 5464362,
		"path": "../public/__l5e/assets-v1/ca81a0a3-9b63-4ce5-a322-303f1caa2a1e/home-domain-cyber.mp4"
	},
	"/__l5e/assets-v1/b119c53e-cd0d-4f81-afad-59b53ba864a9/flow-fleet.mp4": {
		"type": "video/mp4",
		"etag": "\"627ac3-RfdTAfi9GhaRBFZES+pS4U25Trw\"",
		"mtime": "2026-09-30T06:07:50.706Z",
		"size": 6453955,
		"path": "../public/__l5e/assets-v1/b119c53e-cd0d-4f81-afad-59b53ba864a9/flow-fleet.mp4"
	},
	"/__l5e/assets-v1/e2a37e38-23f8-4e4e-9e0c-acfa646f3c23/flow-perception.mp4": {
		"type": "video/mp4",
		"etag": "\"5146bb-Jk7tudToke68xEqfxPES0CaI5gA\"",
		"mtime": "2026-09-30T06:07:50.716Z",
		"size": 5326523,
		"path": "../public/__l5e/assets-v1/e2a37e38-23f8-4e4e-9e0c-acfa646f3c23/flow-perception.mp4"
	},
	"/__l5e/assets-v1/d4568325-8876-4af9-a441-026708e2bab0/home-domain-homeland.mp4": {
		"type": "video/mp4",
		"etag": "\"6554bd-PhC72Bbj20Hp4r9MJUmC2RmShe4\"",
		"mtime": "2026-09-30T06:07:50.673Z",
		"size": 6640829,
		"path": "../public/__l5e/assets-v1/d4568325-8876-4af9-a441-026708e2bab0/home-domain-homeland.mp4"
	},
	"/__l5e/assets-v1/d3633e1e-8a40-441b-b48b-c275761a1729/aigis-maritime-dawn.mp4": {
		"type": "video/mp4",
		"etag": "\"83f627-gpRsoDm0rhWO98oCvtOTrVJzl2Q\"",
		"mtime": "2026-09-30T06:07:50.723Z",
		"size": 8648231,
		"path": "../public/__l5e/assets-v1/d3633e1e-8a40-441b-b48b-c275761a1729/aigis-maritime-dawn.mp4"
	},
	"/__l5e/assets-v1/dfa9d994-8301-4127-be9c-b7cd124a9340/aigis-drone-hero.mp4": {
		"type": "video/mp4",
		"etag": "\"75f033-qGRAvX2fkvkRberx8wzos0c4kAM\"",
		"mtime": "2026-09-30T06:07:50.714Z",
		"size": 7729203,
		"path": "../public/__l5e/assets-v1/dfa9d994-8301-4127-be9c-b7cd124a9340/aigis-drone-hero.mp4"
	},
	"/__l5e/assets-v1/f1c6011a-fded-4efd-b51f-190d755a0787/about-hero.mp4": {
		"type": "video/mp4",
		"etag": "\"8a6ff3-/xviJ5abyMNnYGOl+pruoDspL7E\"",
		"mtime": "2026-09-30T06:07:50.723Z",
		"size": 9072627,
		"path": "../public/__l5e/assets-v1/f1c6011a-fded-4efd-b51f-190d755a0787/about-hero.mp4"
	},
	"/__l5e/assets-v1/ed9dff2b-30c5-49c5-8d4f-3c90fdc3fb13/aigis-inside-drone.mp4": {
		"type": "video/mp4",
		"etag": "\"932b52-tA+hSNrk6apLIy+I06JIwTNDnKo\"",
		"mtime": "2026-09-30T06:07:50.720Z",
		"size": 9644882,
		"path": "../public/__l5e/assets-v1/ed9dff2b-30c5-49c5-8d4f-3c90fdc3fb13/aigis-inside-drone.mp4"
	},
	"/__l5e/assets-v1/f6ac66cf-ed02-4018-ad49-5bc3da77ed2e/how-aigis-works-cinematic.mp4": {
		"type": "video/mp4",
		"etag": "\"7a2c39-cbmvTmaCUadCne+o6sJqF7lnaqY\"",
		"mtime": "2026-09-30T06:07:50.721Z",
		"size": 8006713,
		"path": "../public/__l5e/assets-v1/f6ac66cf-ed02-4018-ad49-5bc3da77ed2e/how-aigis-works-cinematic.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region ../../dev-server/node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_j21Qvj = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_j21Qvj
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region ../../dev-server/node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region ../../dev-server/node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region ../../dev-server/node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region ../../dev-server/node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
