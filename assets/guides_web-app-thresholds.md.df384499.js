import{_ as a,c as o,a as e,b as s,t as r,e as n,o as i}from"./app.99c992b8.js";const d="/product-docs/assets/threshold-configuration.dc6d8f0a.png",k=JSON.parse('{"title":"Configure Thresholds","description":"","frontmatter":{"title":"Configure Thresholds"},"headers":[{"level":2,"title":"Degraded and Down States","slug":"degraded-and-down-states","link":"#degraded-and-down-states","children":[]},{"level":2,"title":"Changing the Threshold Defaults","slug":"changing-the-threshold-defaults","link":"#changing-the-threshold-defaults","children":[]}],"relativePath":"guides/web-app-thresholds.md","lastUpdated":1669071708000}'),h={name:"guides/web-app-thresholds.md"},l={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=n('<h2 id="degraded-and-down-states" tabindex="-1">Degraded and Down States <a class="header-anchor" href="#degraded-and-down-states" aria-hidden="true">#</a></h2><p>Metrist will declare that a service is degraded when:</p><ul><li>The most recent three consecutive response times for a given check are all 500% or more above the average seen over the past seven days.</li></ul><p>Metrist will declare that a service has recovered from a degraded state when:</p><ul><li>The most recent three consecutive response times for any degraded check are all below 500% of the average seen over the past seven days.</li></ul><p>Metrist will declare that a service is down when:</p><ul><li>The most recent two consecutive checks have failed to get a response, or,</li><li>A check run takes longer than 900,000 ms, (15 minutes), to complete.</li></ul><p>Metrist will declare that a service has recovered from a down state when:</p><ul><li>The most recent two consecutive checks have succeeded, or,</li><li>A check run completed after a run that timed out runs in less than 900,000 ms, (15 minutes).</li></ul><h2 id="changing-the-threshold-defaults" tabindex="-1">Changing the Threshold Defaults <a class="header-anchor" href="#changing-the-threshold-defaults" aria-hidden="true">#</a></h2><p>For a service monitor in aggregate, or indeed for any of a service monitor\u2019s checks, the above definitions of <em>degraded</em> and <em>down</em> can be changed to match your workloads and use cases.</p><p>Changing these values affects not only when the web UI indicates a service monitor\u2019s status, but also when you\u2019ll be notified via any alerting subscriptions you\u2019ve added.</p><p>For degraded states, you can configure the following values:</p><ul><li>The 500% threshold.</li><li>The number of consecutive check runs required to change the state to degraded.</li><li>The number of consecutive check runs required to change the state from degraded to recovered.</li></ul><p>For down states, you can configure the following values:</p><ul><li>The number of consecutive check runs required to change the state to down.</li><li>The number of consecutive check runs required to change the state from down to recovered.</li><li>The timeout value beyond which a check run is considered to be down.</li></ul><p>To change these, click on the service monitor you\u2019d like to change.</p><ol><li><p>Click on the <em>Thresholds</em> button.</p></li><li><p>Make changes to the configuration items that you\u2019d like.</p></li><li><p>Click on the <em>Save Configuration</em> button.</p><p><img src="'+d+'" alt="Configuring thresholds"></p></li></ol>',18);function g(t,p,f,m,v,w){return i(),o("div",null,[e("h1",l,[s(r(t.$frontmatter.title)+" ",1),c]),u])}const T=a(h,[["render",g]]);export{k as __pageData,T as default};
