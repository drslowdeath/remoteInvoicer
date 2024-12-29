import "./style.css";
import Alpine from "alpinejs";
// Alpine plugs
import morph from '@alpinejs/morph'
import anchor from "@alpinejs/anchor"
import collapse from '@alpinejs/collapse'
// Tab Manager 
import tabManager from "/src/tabs/tabManager.js" 
// Components
import counter from "/src/components/counter"

window.Alpine = Alpine;
Alpine.plugin(morph)
Alpine.plugin(anchor)
Alpine.plugin(collapse)

Alpine.data("counter", counter);
Alpine.data("tabManager", tabManager);

Alpine.start();