// ==UserScript==
// @name         BGP.tools PeeringDB button
// @namespace    http://kjartan.io/
// @version      0.1
// @description  Display a button to easily open the PeeringDB page of any network.
// @author       Kjartan Hrafnkelsson
// @match        https://bgp.tools/as/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bgp.tools
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	let _x = document.querySelector('div.section-tabs.js-tabs').querySelector('ul');
	let _a = document.querySelector('#network-number').querySelector('strong').innerText;
	let _n = document.createElement('li');
	let _b = document.createElement('a');
	_b.href = "https://peeringdb.com/asn/" + _a;
	_b.target = "_blank";
	_b.rel = "noreferrer";
	_b.innerText = "PeeringDB";
	_n.appendChild(_b);
	_x.insertBefore(_n, _x.children[2]);
    console.log('[peeringdb-btn-plugin] added button to dom.');
})();
