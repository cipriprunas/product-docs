import{_ as a,c as o,a as s,b as e,t,e as l,o as p}from"./app.2b17415c.js";const m=JSON.parse('{"title":"AWS Elastic Load Balancing","description":"","frontmatter":{"title":"AWS Elastic Load Balancing"},"headers":[{"level":2,"title":"Monitor Specs","slug":"monitor-specs","link":"#monitor-specs","children":[]},{"level":2,"title":"Pre-Requisites","slug":"pre-requisites","link":"#pre-requisites","children":[]},{"level":2,"title":"Orchestrator Environment","slug":"orchestrator-environment","link":"#orchestrator-environment","children":[]},{"level":2,"title":"Monitor Environment","slug":"monitor-environment","link":"#monitor-environment","children":[]},{"level":2,"title":"Monitor Config Registration","slug":"monitor-config-registration","link":"#monitor-config-registration","children":[]}],"relativePath":"monitors/metrist_awselb.md","lastUpdated":1669832799000}'),r={name:"monitors/metrist_awselb.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),D=l(`<h2 id="monitor-specs" tabindex="-1">Monitor Specs <a class="header-anchor" href="#monitor-specs" aria-hidden="true">#</a></h2><dl><dt>Name</dt><dd><p><code>awselb</code></p></dd><dt>Version</dt><dd><p>1.0.0</p></dd><dt>Description</dt><dd><p>Monitor the observability of <a href="https://aws.amazon.com/elasticloadbalancing/" target="_blank" rel="noreferrer">AWS ELB service</a>.</p></dd><dd><p>\xA0</p></dd></dl><h2 id="pre-requisites" tabindex="-1">Pre-Requisites <a class="header-anchor" href="#pre-requisites" aria-hidden="true">#</a></h2><ol><li><p>Create your Metrist account. Either <a href="/guides/web-app-invites.html">get an invitation from someone in your team</a> or <a href="https://app.metrist.io/login/signup" target="_blank" rel="noreferrer">create an individual account</a>.</p></li><li><p><a href="/guides/orchestrator-installation.html">Install Metrist Orchestrator</a> in your own environment.</p></li><li><p>Configure Orchestrator with your Metrist API Token and environment variables relevant to this monitor.</p></li><li><p>Register the monitor using <a href="/tools/api.html">Metrist Monitor API</a>.</p></li><li><p>Observe the monitor in your <a href="https://app.metrist.io/" target="_blank" rel="noreferrer">Metrist.io</a> account.</p></li></ol><h2 id="orchestrator-environment" tabindex="-1">Orchestrator Environment <a class="header-anchor" href="#orchestrator-environment" aria-hidden="true">#</a></h2><p>In Orchestrator (the instance in which you want this monitor to run), ensure you have defined at least these environment variables:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">METRIST_API_TOKEN=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">METRIST_INSTANCE_ID=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">METRIST_RUN_GROUPS=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="monitor-environment" tabindex="-1">Monitor Environment <a class="header-anchor" href="#monitor-environment" aria-hidden="true">#</a></h2><p>With a Metrist account and Orchestrator installed, you are ready to configure Orchestrator for use with your new monitor.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># (Required) Your AWS Access Key Id.</span></span>
<span class="line"><span style="color:#A6ACCD;">METRIST_AWS_ACCESS_KEY_ID=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># (Required) The id assigned to your ECS cluster.</span></span>
<span class="line"><span style="color:#A6ACCD;">METRIST_AWS_ECS_CLUSTER_ID=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># (Required) The service name of your container service.</span></span>
<span class="line"><span style="color:#A6ACCD;">METRIST_AWS_ECS_SERVICE_ID=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># (Required) The DNS name of your ELB endpoint \u2014 the address to which HTTP requests can be made.</span></span>
<span class="line"><span style="color:#A6ACCD;">METRIST_AWS_ELB_DNS_NAME=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># (Required) The target group ARN of your ELB service.</span></span>
<span class="line"><span style="color:#A6ACCD;">METRIST_AWS_ELB_TARGET_GROUP_ARN=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># (Required) Any valid AWS Region name.</span></span>
<span class="line"><span style="color:#A6ACCD;">METRIST_AWS_REGION=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># (Required) Your AWS Secret Access Key.</span></span>
<span class="line"><span style="color:#A6ACCD;">METRIST_AWS_SECRET_ACCESS_KEY=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>These values are never transmitted to Metrist \u2014 they are never exposed outside your environment.</p></div><div class="warning custom-block"><p class="custom-block-title">IMPORTANT</p><p>You will need to restart Orchestrator to be sure the new environment variables are available to your new monitor.</p></div><h2 id="monitor-config-registration" tabindex="-1">Monitor Config Registration <a class="header-anchor" href="#monitor-config-registration" aria-hidden="true">#</a></h2><p>With monitor configuration now available in your local instance of Orchestrator, the last step is to inform Metrist of your monitor. Metrist will then run schedule the appropriate tests and record the relevant telemetry data (e.g., \u201Corchestrate\u201D).</p><p>In the following code, adjust the values of <code>timeout_secs</code>, <code>interval_secs</code>, and <code>run_groups</code> to suit your needs. <code>run_groups</code> <strong>must</strong> include at least 1 value in the list defined in <code>METRIST_RUN_GROUPS</code> environment variable. Leave all other values as they are defined below.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">monitor_logical_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">awselb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">interval_secs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">120</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">run_groups</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">match-one</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">or-more</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">run-groups</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">run_spec</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">awselb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">run_type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">exe</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">steps</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">check_logical_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ChangeTargetGroup</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This step attempts to change an ELB target group and measure how long it takes for the change to become effective.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">required</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">timeout_secs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Convert your monitor config to a JSON string, get your Metrist API token, and use the curl request below to register your monitor:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">json= the json above converted to string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">api_token=YOUR_TOKEN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">api_token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">curl -d </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">json -H </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Type: application/json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -H </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Authorization: Bearer </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">api_token</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://app.metrist.io/api/v0/monitor-config</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Tip: Our <a href="/tools/api.html">API documentation</a> describes how to delete/unregister the monitor.</p></div><p>That HTTP request should return a key such as <code>11zLBF1eZq9g3wZh86nYXV8</code>. And, if you were running Orchestrator in a terminal window, you will see the following output with a recent timestamp:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">hh:mm:ss.mss monitor={monitor_logical_name}</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">{stepname}</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  Initialize monitor with %{extra_config: %{}, id: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">11zLBF1eZq9g3wZh86nYXV8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, interval_secs: 120, last_run_time: nil, monitor_logical_name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{monitor_logical_name}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, run_spec: %{name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{monitor_logical_name}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, run_type: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{dll|exe}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">}, steps: </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">%{check_logical_name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{stepname}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, timeout_secs: 900}</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">hh:mm:ss.mss </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  Started child </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">11zLBF1eZq9g3wZh86nYXV8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> with config %{extra_config: nil, id: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">11zLBF1eZq9g3wZh86nYXV8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, interval_secs: 120, last_run_time: nil, monitor_logical_name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{monitor_logical_name}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, run_spec: %{name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{monitor_logical_name}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, run_type: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{dll|exe}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">}, steps: </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">%{check_logical_name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{stepname}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, timeout_secs: 900}</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">} as </span><span style="color:#676E95;">#PID&lt;0.####.0&gt;</span></span>
<span class="line"></span></code></pre></div><p>Metrist now runs the monitor through your Orchestrator. As soon as your Orchestrator reports telemetry data to Metrist, your new monitor will be visible at <a href="https://app.metrist.io" target="_blank" rel="noreferrer">app.metrist.io</a>.</p>`,22);function y(n,F,u,C,d,A){return p(),o("div",null,[s("h1",c,[e(t(n.$frontmatter.title)+" ",1),i]),D])}const _=a(r,[["render",y]]);export{m as __pageData,_ as default};
