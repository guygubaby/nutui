import{e as a,o as t,G as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Rate \u8BC4\u5206</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5FEB\u901F\u7684\u8BC4\u7EA7\u64CD\u4F5C\uFF0C\u6216\u5BF9\u8BC4\u4EF7\u8FDB\u884C\u5C55\u793A\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { Rate,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { Rate,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Rate);
app.use(Icon);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">3</span>);
    <span class="hljs-keyword">return</span> { value }
}
</code></pre><h3>\u81EA\u5B9A\u4E49icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">checked-icon</span>=<span class="hljs-string">&quot;heart-fill1&quot;</span> <span class="hljs-attr">unchecked-icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6570\u91CF</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#FFC800&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre><h3>\u53EA\u8BFB</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readOnly</span> /&gt;</span>
</code></pre><h3>\u7ED1\u5B9A\u4E8B\u4EF6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">3</span>);
    <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">val</span>)=&gt;</span>{
        Toast.text(val);
    }
    <span class="hljs-keyword">return</span> { value }
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u5C3A\u5BF8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;35&quot;</span> /&gt;</span>
</code></pre><h2>Prop</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D star \u6570\uFF0C\u53EF\u4F7F\u7528 v-model \u53CC\u5411\u7ED1\u5B9A\u6570\u636E</td><td>Number</td><td>-</td></tr><tr><td>count</td><td>star \u603B\u6570</td><td>Number</td><td>5</td></tr><tr><td>icon-size</td><td>star \u5927\u5C0F</td><td>Number</td><td>18</td></tr><tr><td>active-color</td><td>\u56FE\u6807\u9009\u4E2D\u989C\u8272</td><td>String</td><td>#fa200c</td></tr><tr><td>void-color</td><td>\u56FE\u6807\u672A\u9009\u4E2D\u989C\u8272</td><td>String</td><td>#ccc</td></tr><tr><td>unchecked-icon</td><td>\u4F7F\u7528\u56FE\u6807(\u672A\u9009\u4E2D)</td><td>String</td><td>star-n</td></tr><tr><td>checked-icon</td><td>\u4F7F\u7528\u56FE\u6807(\u9009\u4E2D)</td><td>String</td><td>star-fill-n</td></tr><tr><td>allow-half</td><td>\u662F\u5426\u534A\u661F</td><td>Boolean</td><td>false</td></tr><tr><td>readonly</td><td>\u662F\u5426\u53EA\u8BFB</td><td>Boolean</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>Boolean</td><td>false</td></tr><tr><td>spacing</td><td>\u95F4\u8DDD</td><td>Number</td><td>20</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u524D\u5206\u503C\u4FEE\u6539\u65F6\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5F53\u524D\u503C</td></tr></tbody></table>`,28),e=[p],u={setup(r,{expose:s}){return s({frontmatter:{}}),(d,o)=>(t(),a("div",l,e))}};export{u as default};
