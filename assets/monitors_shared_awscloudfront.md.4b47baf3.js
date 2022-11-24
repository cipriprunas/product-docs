import{_ as o,c as a,a as s,b as l,t,e as p,o as e}from"./app.6965fb81.js";const q=JSON.parse('{"title":"AWS CloudFront","description":"","frontmatter":{"title":"AWS CloudFront"},"headers":[{"level":2,"title":"Monitor Specs","slug":"monitor-specs","link":"#monitor-specs","children":[]},{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Setup (In a Nutshell)","slug":"setup-in-a-nutshell","link":"#setup-in-a-nutshell","children":[]},{"level":2,"title":"Setup (Detailed Steps)","slug":"setup-detailed-steps","link":"#setup-detailed-steps","children":[{"level":3,"title":"1. Pre-requisites","slug":"_1-pre-requisites","link":"#_1-pre-requisites","children":[]},{"level":3,"title":"2. Monitor Configuration","slug":"_2-monitor-configuration","link":"#_2-monitor-configuration","children":[]},{"level":3,"title":"3. Monitor Registration","slug":"_3-monitor-registration","link":"#_3-monitor-registration","children":[]}]},{"level":2,"title":"4. Result","slug":"_4-result","link":"#_4-result","children":[]}],"relativePath":"monitors/shared/awscloudfront.md","lastUpdated":1669318631000}'),r={name:"monitors/shared/awscloudfront.md"},c={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=p(`<h2 id="monitor-specs" tabindex="-1">Monitor Specs <a class="header-anchor" href="#monitor-specs" aria-hidden="true">#</a></h2><dl><dt>Name (<code>monitor_logical_name</code>)</dt><dd><p><code>awscloudfront</code></p></dd><dt>Description</dt><dd><p>AWS CloudFront</p></dd><dt>Steps</dt><dd><p><code>PublishFile</code></p></dd><dd><p><code>GetNewFile</code></p></dd><dd><p><code>UpdateFile</code></p></dd><dd><p><code>PurgeFile</code></p></dd><dd><p><code>GetUpdatedFile</code></p></dd><dd><p><code>DeleteFile</code></p></dd><dd><p><code>WaitForDeletionPropagation</code></p></dd><dt>Extra Configuration</dt><dd><p><code>AWSRegion</code> \u2014 String.</p></dd><dd><p><code>AWSAccessKeyID</code> \u2014 String. See <a href="https://docs.aws.amazon.com/sdkfornet1/latest/apidocs/html/T_Amazon_Runtime_BasicAWSCredentials.htm" target="_blank" rel="noreferrer">BasicAWSCredentials Class</a></p></dd><dd><p><code>AWSSecretAccessKey</code> \u2014 String or SecureString. See <a href="https://docs.aws.amazon.com/sdkfornet1/latest/apidocs/html/T_Amazon_Runtime_BasicAWSCredentials.htm" target="_blank" rel="noreferrer">BasicAWSCredentials Class</a></p></dd><dd><p><code>BucketName</code> \u2014 Amazon S3 bucket name.</p></dd><dd><p><code>DistributionDomainName</code> \u2014 Domain name of CloudFront distribution</p></dd><dd><p><code>DistributionId</code> \u2014 ID of CloudFront distribution</p></dd></dl><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h2><p>Use this monitor to observe a specific CloudFront distribution.</p><h2 id="setup-in-a-nutshell" tabindex="-1">Setup (In a Nutshell) <a class="header-anchor" href="#setup-in-a-nutshell" aria-hidden="true">#</a></h2><ol><li><a href="/guides/orchestrator-installation.html">Install Metrist Orchestrator</a> in your own environment.</li><li>Configure Metrist Orchestrator with your Metrist API Token and the Extra Configuration required for this specific monitor.</li><li>Register the monitor using <a href="/tools/api.html">Metrist Monitor API</a>.</li><li>Observe the monitor in your <a href="https://app.metrist.io/" target="_blank" rel="noreferrer">Metrist.io</a> account.</li></ol><h2 id="setup-detailed-steps" tabindex="-1">Setup (Detailed Steps) <a class="header-anchor" href="#setup-detailed-steps" aria-hidden="true">#</a></h2><h3 id="_1-pre-requisites" tabindex="-1">1. Pre-requisites <a class="header-anchor" href="#_1-pre-requisites" aria-hidden="true">#</a></h3><p>A Metrist account.</p><ul><li>If someone in your team already has a Metrist account, <a href="/guides/web-app-invites.html">they can invite you</a>.</li><li>Or <a href="https://app.metrist.io/login/signup" target="_blank" rel="noreferrer">create a new account</a>.</li></ul><p>Metrist Orchestrator.</p><ul><li>Follow these <a href="/guides/orchestrator-installation.html">installation instructions</a> to get Orchestrator running on your own device.</li></ul><p>At this point, you have running instance of Orchestrator and will have set up at least these environment variables:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">METRIST_API_TOKEN</span></span>
<span class="line"><span style="color:#A6ACCD;">METRIST_INSTANCE_ID</span></span>
<span class="line"><span style="color:#A6ACCD;">METRIST_RUN_GROUPS</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-monitor-configuration" tabindex="-1">2. Monitor Configuration <a class="header-anchor" href="#_2-monitor-configuration" aria-hidden="true">#</a></h3><p>With a Metrist account and Orchestrator installed, you are ready to configure Orchestrator for use with your new monitor.</p><p>In the environment where your Orchestrator is installed, add the following environment variables.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">AWS_REGION=a_valid_aws_region_name</span></span>
<span class="line"><span style="color:#A6ACCD;">AWS_ACCESS_KEY_ID=your_id</span></span>
<span class="line"><span style="color:#A6ACCD;">AWS_SECRET_ACCESS_KEY=your_key</span></span>
<span class="line"><span style="color:#A6ACCD;">BUCKET=your-bucket-name</span></span>
<span class="line"><span style="color:#A6ACCD;">DISTRIBUTION_DOMAIN_NAME=your-distribution.domain</span></span>
<span class="line"><span style="color:#A6ACCD;">DISTRIBUTION_ID=your_distribution_id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">INFO</p><p>These values are never transmitted to Metrist \u2014 they are never exposed outside your environment.</p></div><div class="warning custom-block"><p class="custom-block-title">IMPORTANT</p><p>You will need to restart Orchestrator to be sure the new environment variables are available to your new monitor.</p></div><h3 id="_3-monitor-registration" tabindex="-1">3. Monitor Registration <a class="header-anchor" href="#_3-monitor-registration" aria-hidden="true">#</a></h3><p>With monitor configuration now available in your local instance of Orchestrator, the last step is to inform Metrist of your monitor. Metrist will then run schedule the appropriate tests and record the relevant telemetry data (e.g., \u201Corchestrate\u201D).</p><p>In the following code, adjust the values of <code>timeout_secs</code>, <code>interval_secs</code>, and <code>run_groups</code> to suit your needs. <code>run_groups</code> <strong>must</strong> include at least 1 value in the list defined in <code>METRIST_RUN_GROUPS</code> environment variable. Leave all other values as they are defined below.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">monitor_logical_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">awscloudfront</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">interval_secs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">120</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">run_groups</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">match-one</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">or-more</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">run-groups</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">run_spec</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">awscloudfront</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">run_type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dll</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">steps</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">check_logical_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PingInstance</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">timeout_secs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">check_logical_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PublishFile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">timeout_secs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">check_logical_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GetNewFile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">timeout_secs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">check_logical_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UpdateFile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">timeout_secs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">check_logical_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PurgeFile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">timeout_secs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">check_logical_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GetUpdatedFile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">timeout_secs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">check_logical_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DeleteFile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">timeout_secs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">check_logical_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">WaitForDeletionPropagation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">timeout_secs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">900</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Convert it to a JSON string (like below), get your Metrist API token, and use the curl request below to register your monitor:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">json=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">monitor_logical_name</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">awscloudfront</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">interval_secs</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:120,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">run_groups</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:[</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">match-one</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">or-more</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">run-groups</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">],</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">run_spec</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:{</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">awscloudfront</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">run_type</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">dll</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">},</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">steps</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:[{</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">check_logical_name</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">PingInstance</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">timeout_secs</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:900},{</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">check_logical_name</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">PublishFile</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">timeout_secs</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:900},{</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">check_logical_name</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">GetNewFile</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">timeout_secs</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:900},{</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">check_logical_name</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">UpdateFile</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">timeout_secs</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:900},{</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">check_logical_name</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">PurgeFile</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">timeout_secs</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:900},{</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">check_logical_name</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">GetUpdatedFile</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">timeout_secs</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:900},{</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">check_logical_name</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">DeleteFile</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">timeout_secs</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:900},{</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">check_logical_name</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">WaitForDeletionPropagation</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">timeout_secs</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">:900}]}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">api_token=YOUR_TOKEN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">api_token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">curl -d </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">json -H </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Type: application/json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -H </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Authorization: Bearer </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">api_token</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://app.metrist.io/api/v0/monitor-config</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Tip: Our <a href="/tools/api.html">API documentation</a> describes how to delete/unregister the monitor.</p></div><p>That HTTP request should return a key such as <code>11zLBF1eZq9g3wZh86nYXV8</code>. And, if you were running Orchestrator in a terminal window, you will see the following output with a recent timestamp:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">hh:mm:ss.mss monitor={monitor_logical_name}</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">{stepname}</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  Initialize monitor with %{extra_config: %{}, id: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">11zLBF1eZq9g3wZh86nYXV8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, interval_secs: 120, last_run_time: nil, monitor_logical_name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{monitor_logical_name}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, run_spec: %{name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{monitor_logical_name}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, run_type: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{dll|exe}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">}, steps: </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">%{check_logical_name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{stepname}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, timeout_secs: 900}</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">hh:mm:ss.mss </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  Started child </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">11zLBF1eZq9g3wZh86nYXV8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> with config %{extra_config: nil, id: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">11zLBF1eZq9g3wZh86nYXV8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, interval_secs: 120, last_run_time: nil, monitor_logical_name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{monitor_logical_name}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, run_spec: %{name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{monitor_logical_name}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, run_type: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{dll|exe}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">}, steps: </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">%{check_logical_name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{stepname}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, timeout_secs: 900}</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">} as </span><span style="color:#676E95;">#PID&lt;0.####.0&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="_4-result" tabindex="-1">4. Result <a class="header-anchor" href="#_4-result" aria-hidden="true">#</a></h2><p>Metrist now runs the monitor through your Orchestrator. As soon as your Orchestrator reports telemetry data to Metrist, your new monitor will be visible at <a href="https://app.metrist.io" target="_blank" rel="noreferrer">app.metrist.io</a>.</p>`,31);function y(n,C,F,A,u,d){return e(),a("div",null,[s("h1",c,[l(t(n.$frontmatter.title)+" ",1),D]),i])}const _=o(r,[["render",y]]);export{q as __pageData,_ as default};
