import { useState, useEffect, useRef, useMemo } from "react";
import { CURRICULUM_MAPS } from "./curriculum-maps.js";

const CURRICULUM = [
  {
    domain: "MATHEMATICAL FOUNDATIONS", color: "#D4A96A", glyph: "∑",
    desc: "The language all of AI is written in — master this, master everything",
    topics: [
      { id:"sets",      title:"Set Theory & Logic",                sub:"The grammar of mathematics",              depth:"Sets, functions, proofs, sigma-algebras, measure theory intro" },
      { id:"prob",      title:"Probability & Kolmogorov Axioms",   sub:"Formalizing uncertainty from scratch",    depth:"Sample spaces, events, axioms, conditional probability, independence" },
      { id:"rv",        title:"Random Variables & Distributions",  sub:"Abstracting randomness",                  depth:"PMF, PDF, CDF, expectation, variance, common distributions" },
      { id:"jointprob", title:"Joint, Marginal & Conditional",     sub:"When variables interact",                 depth:"Joint distributions, marginalization, Bayes' theorem derived" },
      { id:"linalg1",   title:"Vectors, Matrices & Linear Maps",   sub:"The geometry of data",                    depth:"Vector spaces, basis, rank, null space, linear transformations" },
      { id:"linalg2",   title:"Eigenvalues, SVD & Decompositions", sub:"The skeleton inside every matrix",        depth:"Eigendecomposition, SVD full derivation, PCA connection, Cholesky" },
      { id:"calc",      title:"Multivariate Calculus",             sub:"The mathematics of change",               depth:"Partial derivatives, gradient, Jacobian, Hessian, chain rule" },
      { id:"opt",       title:"Optimization Theory",               sub:"Finding minima in curved landscapes",     depth:"Convexity, gradient descent, KKT conditions, Lagrangians, saddle points" },
      { id:"info",      title:"Information Theory",                sub:"Quantifying knowledge and surprise",      depth:"Entropy, cross-entropy, KL divergence, mutual information, bits" },
      { id:"stats",     title:"Statistical Estimation",            sub:"Extracting truth from finite data",       depth:"MLE, MAP, bias-variance tradeoff, confidence intervals, CLT" },
      { id:"bayes_th",  title:"Bayesian Inference",                sub:"Updating beliefs with evidence",          depth:"Prior, likelihood, posterior, conjugacy, MCMC intuition" },
      { id:"nummath",   title:"Numerical Methods & Stability",     sub:"Making mathematics computable",           depth:"Floating point, numerical differentiation, stability, condition numbers" },
    ]
  },
  {
    domain: "CLASSICAL MACHINE LEARNING", color: "#6ABFA0", glyph: "λ",
    desc: "The algorithms that still power most of production ML",
    topics: [
      { id:"ml_frame",  title:"The ML Framework",                  sub:"What does it mean to learn?",             depth:"PAC learning, VC dimension, bias-variance, generalization bounds" },
      { id:"data_prep", title:"Data, EDA & Feature Engineering",   sub:"Garbage in, garbage out",                 depth:"Distributions, outliers, normalization, encoding, data leakage" },
      { id:"linreg",    title:"Linear Regression — Full Derivation",sub:"The simplest model, deeply understood", depth:"OLS, normal equations, geometric view, Ridge/Lasso as priors" },
      { id:"logistic",  title:"Logistic Regression & GLMs",        sub:"Probability as model output",             depth:"Sigmoid, cross-entropy loss derived from MLE, GLM family" },
      { id:"svm",       title:"Support Vector Machines",           sub:"Maximum margin geometry",                 depth:"Hard/soft margin, Lagrangian dual, kernel trick, Mercer's theorem" },
      { id:"trees",     title:"Decision Trees",                    sub:"Splitting space with information",        depth:"Entropy gain, Gini, CART, pruning, depth vs variance" },
      { id:"ensemble",  title:"Ensemble Methods & Boosting",       sub:"Many weak learners, one strong model",   depth:"Bagging, random forests, AdaBoost, gradient boosting, XGBoost math" },
      { id:"kernels",   title:"Kernel Methods & Gaussian Processes",sub:"Learning in infinite-dimensional space", depth:"RKHS, kernel construction, GP regression, uncertainty quantification" },
      { id:"dimred",    title:"Dimensionality Reduction",          sub:"The manifold hypothesis in practice",    depth:"PCA from SVD, kernel PCA, t-SNE, UMAP — math and intuition" },
      { id:"cluster",   title:"Clustering: K-Means, GMM, DBSCAN",  sub:"Structure without labels",               depth:"Lloyd's algorithm, EM for GMMs full derivation, density clustering" },
      { id:"eval",      title:"Model Evaluation & Selection",      sub:"Knowing when you're actually right",     depth:"CV, ROC-AUC, calibration, precision-recall, statistical tests" },
    ]
  },
  {
    domain: "NEURAL NETWORKS: FIRST PRINCIPLES", color: "#A07CC5", glyph: "∂",
    desc: "Build every neuron from scratch — no library until you understand it",
    topics: [
      { id:"perceptron",  title:"Perceptron & Universal Approximation", sub:"Why neural networks can fit anything",  depth:"Linear threshold, convergence theorem, UAT proof sketch" },
      { id:"forwardprop", title:"Forward Propagation",                  sub:"Computing predictions layer by layer",  depth:"Matrix chain, activation composition, computational graph" },
      { id:"backprop",    title:"Backpropagation — Full Derivation",    sub:"The algorithm that changed everything", depth:"Chain rule on graphs, delta rule, numpy from scratch, manual grad" },
      { id:"autograd",    title:"Automatic Differentiation",            sub:"How PyTorch actually works",            depth:"Forward vs reverse mode, dual numbers, tape-based AD, build your own" },
      { id:"activations", title:"Activation Functions",                 sub:"The source of all nonlinearity",       depth:"Sigmoid vanishing, ReLU, Leaky ReLU, GELU, Swish — derivatives" },
      { id:"loss",        title:"Loss Functions & Their Geometry",      sub:"What are you actually minimizing?",    depth:"MSE, cross-entropy, focal loss, contrastive — probabilistic views" },
      { id:"optimizers",  title:"Optimizers: SGD → Adam",               sub:"Navigating high-dimensional loss landscapes", depth:"Momentum, RMSProp, Adam derivation, weight decay, lr schedules" },
      { id:"init",        title:"Weight Initialization",                sub:"Starting matters enormously",          depth:"Xavier, Kaiming, symmetry breaking, signal propagation analysis" },
      { id:"regularize",  title:"Regularization: Dropout, BatchNorm",   sub:"Fighting overfitting with math",       depth:"Dropout as ensemble, MC Dropout, BatchNorm gradient flow analysis" },
      { id:"vanishing",   title:"Vanishing & Exploding Gradients",      sub:"The deep network killer — solved",     depth:"Mathematical analysis, gradient clipping, residual connections" },
    ]
  },
  {
    domain: "LATENT SPACES & REPRESENTATIONS", color: "#C97B7B", glyph: "ℤ",
    desc: "The geometry of meaning — from words to compressed worlds",
    topics: [
      { id:"repr",        title:"What Is a Representation?",            sub:"The core question of deep learning",   depth:"Manifold hypothesis, disentanglement, geometry of feature space" },
      { id:"embeddings",  title:"Word Embeddings & Word2Vec",           sub:"Meaning as geometry",                  depth:"Skip-gram, CBOW, negative sampling, NCE loss, analogy structure" },
      { id:"embed_geo",   title:"The Geometry of Embedding Spaces",     sub:"Why king − man + woman = queen",       depth:"Linear structure, isotropy, hubness, anisotropy problem" },
      { id:"autoenc",     title:"Autoencoders",                         sub:"Compression as representation learning",depth:"Bottleneck, denoising AE, sparse AE, manifold learning view" },
      { id:"vae",         title:"Variational Autoencoders (VAE)",       sub:"Probabilistic latent spaces",          depth:"ELBO full derivation, reparameterization trick, posterior collapse" },
      { id:"gan",         title:"GANs — Theory & Training",             sub:"Two networks at war",                  depth:"JS divergence, Nash equilibrium, Wasserstein GAN, spectral norm" },
      { id:"diffusion",   title:"Diffusion Models",                     sub:"Destroying and rebuilding structure",  depth:"DDPM forward/reverse process, score matching, DDIM sampling" },
      { id:"contrastive", title:"Contrastive & Self-Supervised Learning",sub:"Representations without labels",     depth:"InfoNCE loss derived, SimCLR, MoCo, BYOL, representation collapse" },
      { id:"clip",        title:"Multimodal Embeddings — CLIP",         sub:"Aligning vision and language",         depth:"Contrastive pretraining, zero-shot transfer, embedding alignment" },
      { id:"latent_nav",  title:"Navigating & Manipulating Latent Space",sub:"The space between the data points",  depth:"Interpolation, arithmetic, disentanglement metrics, latent editing" },
    ]
  },
  {
    domain: "ATTENTION & TRANSFORMERS", color: "#6A9FD4", glyph: "⊕",
    desc: "The architecture that rewrote AI — understand every component",
    topics: [
      { id:"rnn_lstm",    title:"RNNs, LSTMs & GRUs",                   sub:"Sequential computation and its limits",depth:"BPTT, vanishing gradient proof, LSTM gate equations derived" },
      { id:"attn_idea",   title:"Attention Mechanism (Bahdanau)",        sub:"The breakthrough before transformers", depth:"Alignment model, context vector, soft vs hard attention" },
      { id:"selfattn",    title:"Self-Attention — Full Derivation",      sub:"Every token attends to every other",  depth:"Q/K/V from first principles, scaled dot-product, why scaling" },
      { id:"multihead",   title:"Multi-Head Attention",                  sub:"Attending to multiple subspaces",     depth:"Parallel heads, projection matrices, what each head learns" },
      { id:"posenc",      title:"Positional Encoding",                   sub:"Injecting order into a permutation-invariant model", depth:"Sinusoidal derivation, learned, RoPE, ALiBi — tradeoffs" },
      { id:"transformer", title:"The Full Transformer Architecture",     sub:"Attention Is All You Need — dissected",depth:"Encoder/decoder, FFN role, Pre-LN vs Post-LN, residual stream" },
      { id:"gpt",         title:"GPT & Autoregressive Language Models",  sub:"Predicting the next token at scale",  depth:"Causal masking, tokenization, perplexity, sampling strategies" },
      { id:"bert",        title:"BERT & Masked Language Modeling",       sub:"Bidirectional contextual representations", depth:"MLM objective, NSP, fine-tuning, contextualized embeddings" },
      { id:"scaling",     title:"Scaling Laws & Emergent Abilities",     sub:"Why bigger is qualitatively different", depth:"Chinchilla, compute-optimal training, emergent abilities, phase transitions" },
      { id:"finetune",    title:"Fine-tuning, LoRA & PEFT",              sub:"Adapting giants efficiently",          depth:"Full fine-tuning, LoRA math, prefix tuning, adapter layers" },
      { id:"inference",   title:"Transformer Inference & FlashAttention",sub:"Making it fast enough to matter",     depth:"KV cache, attention complexity O(n²), FlashAttention, speculative decoding" },
    ]
  },
  {
    domain: "ADVANCED AI FRONTIERS", color: "#7BB87B", glyph: "π",
    desc: "Where the field is right now — and where it's going",
    topics: [
      { id:"rl_found",  title:"Reinforcement Learning Foundations",    sub:"Learning through consequences",        depth:"MDP, Bellman equations, value functions, dynamic programming" },
      { id:"drl",       title:"Deep RL: DQN, PPO, Actor-Critic",       sub:"Neural networks meet RL",              depth:"DQN replay buffer, policy gradients REINFORCE, PPO clipped objective" },
      { id:"rlhf",      title:"RLHF & Alignment",                      sub:"Teaching AI to be helpful and safe",   depth:"Reward modeling, PPO for LLMs, DPO derivation, Constitutional AI" },
      { id:"gnn",       title:"Graph Neural Networks",                 sub:"Learning on structure",                depth:"Message passing framework, GCN, GAT, expressiveness, WL test" },
      { id:"moe",       title:"Mixture of Experts",                    sub:"Scaling with conditional computation", depth:"Routing networks, load balancing, Mixtral, Switch Transformer" },
      { id:"ssm",       title:"State Space Models & Mamba",            sub:"The transformer challenger",           depth:"S4 derivation, selective SSMs, linear recurrence, hardware-aware" },
      { id:"multimodal",title:"Multimodal Models",                     sub:"Vision, language, and beyond",         depth:"ViT, DALL-E, Flamingo, cross-modal attention, unified models" },
      { id:"causal",    title:"Causal Inference",                      sub:"Beyond correlation — the do-calculus", depth:"DAGs, interventions, counterfactuals, IDA, causal RL" },
      { id:"agents",    title:"LLM Agents & Tool Use",                 sub:"Models that act in the world",         depth:"ReAct, function calling, planning, memory, multi-agent systems" },
    ]
  },
  {
    domain: "PYTHON & IMPLEMENTATION", color: "#C8A860", glyph: "⌘",
    desc: "Build everything from scratch — then build it production-ready",
    topics: [
      { id:"numpy",      title:"NumPy & Vectorization",               sub:"Vectorization is everything",           depth:"Broadcasting rules, einsum, strides, memory layout, speed" },
      { id:"autograd_b", title:"Build Autograd from Scratch",         sub:"Your own PyTorch in ~150 lines",        depth:"Value class, computational graph, reverse mode, topo sort" },
      { id:"pytorch",    title:"PyTorch Deep Dive",                   sub:"Tensors, autograd, modules",            depth:"Tensor internals, custom modules, hooks, profiling, torch.compile" },
      { id:"build_nn",   title:"Project: Neural Net from Scratch",    sub:"NumPy only — every gradient by hand",  depth:"Forward/backward pass, train on MNIST, debug gradient flow" },
      { id:"build_tf",   title:"Project: Transformer from Scratch",   sub:"Every line of attention, in Python",   depth:"GPT-level model, character LM, BPE tokenizer, sampling" },
      { id:"build_vae",  title:"Project: VAE from Scratch",           sub:"Latent space you can see and navigate",depth:"ELBO loss, reparameterization, 2D latent visualization, interpolation" },
      { id:"build_rl",   title:"Project: RL Agent from Scratch",      sub:"Train an agent to solve a game",        depth:"CartPole with policy gradients, PPO from scratch, reward shaping" },
      { id:"train_eng",  title:"Training Loop Engineering",           sub:"The craft of the training run",        depth:"Mixed precision, gradient clipping, checkpointing, logging, profiling" },
      { id:"debug_ml",   title:"Debugging ML Models",                 sub:"When things go wrong — and they will", depth:"Loss not decreasing, NaN gradients, overfit diagnosis, activation stats" },
    ]
  },
  {
    domain: "C++ & SYSTEMS FOR ML", color: "#C87B7B", glyph: "⚡",
    desc: "Where performance lives — from kernels to inference engines",
    topics: [
      { id:"cpp_why",    title:"Why C++ for ML Systems",              sub:"Performance is a feature",              depth:"Memory model, cache efficiency, zero-cost abstractions, SIMD" },
      { id:"cpp_nn",     title:"Neural Net in C++ with Eigen",        sub:"From Python to compiled performance",   depth:"Eigen matrix ops, expression templates, building a mini-net" },
      { id:"cuda_intro", title:"CUDA Programming",                    sub:"The GPU execution model",               depth:"Thread hierarchy, shared memory, warps, bandwidth vs compute" },
      { id:"cuda_kern",  title:"Custom CUDA Kernels",                 sub:"When existing ops aren't fast enough",  depth:"Writing kernels, tiling, shared memory, attention kernel by hand" },
      { id:"customop",   title:"Custom PyTorch C++ Extensions",       sub:"Bridging Python and C++",               depth:"ATen ops, pybind11, custom autograd in C++, CUDA extension" },
      { id:"quantize",   title:"Quantization & Model Compression",    sub:"Smaller, faster, cheaper",              depth:"INT8/INT4, QAT vs PTQ, GPTQ, structured pruning, distillation" },
      { id:"infer_eng",  title:"Inference Engines",                   sub:"Deploying at maximum speed",            depth:"ONNX, TensorRT, operator fusion, kernel selection, Triton" },
      { id:"llmcpp",     title:"llama.cpp & Efficient LLM Inference", sub:"LLMs on commodity hardware",            depth:"GGUF format, memory mapping, KV cache management, speculative" },
    ]
  },
  {
    domain: "MLOPS & FULL PIPELINES", color: "#7BA8C8", glyph: "∞",
    desc: "Close the loop — from idea to production to iteration",
    topics: [
      { id:"ml_design",  title:"ML System Design",                    sub:"Architecture before code",              depth:"Requirements, SLOs, data flywheel, train/serve skew, tradeoffs" },
      { id:"experiment", title:"Experiment Tracking & Reproducibility",sub:"Science needs records",               depth:"MLflow, W&B, DVC, config management, seed everything" },
      { id:"features",   title:"Feature Stores & Data Pipelines",     sub:"Data as a first-class product",        depth:"Feast, point-in-time joins, streaming vs batch, great expectations" },
      { id:"dist_train", title:"Distributed Training",                sub:"When one GPU is not enough",           depth:"DDP, FSDP, ZeRO stages, pipeline parallelism, gradient sync" },
      { id:"serving",    title:"Model Serving & Inference APIs",      sub:"Getting predictions to users fast",     depth:"REST/gRPC, dynamic batching, TorchServe, Triton, latency budgets" },
      { id:"monitoring", title:"Monitoring, Drift & Alerting",        sub:"Models degrade in silence",            depth:"Data drift, concept drift, PSI, Evidently, alerting strategies" },
      { id:"ab_test",    title:"A/B Testing for ML",                  sub:"Measuring real-world impact",          depth:"Experiment design, power analysis, Bayesian A/B, interleaving" },
      { id:"cicd_ml",    title:"CI/CD for ML",                        sub:"Engineering discipline for models",     depth:"Model validation gates, shadow deployment, canary releases" },
      { id:"fullpipe",   title:"Project: End-to-End AI System",       sub:"From raw data to monitored production",depth:"Feature pipeline → training → serving → monitoring → iteration loop" },
    ]
  },
];

// ─── PROMPTS ──────────────────────────────────────────────────────────────────

const FREE_SESSION_PROMPT = `You are an elite AI/ML professor — a synthesis of Andrej Karpathy's hands-on clarity, Yann LeCun's theoretical depth, and Richard Feynman's infectious joy.

The student is in a FREE SESSION — open conversation about any AI/ML topic.
You know their full curriculum: Mathematical Foundations, Classical ML, Neural Networks, Latent Spaces, Transformers, Advanced Frontiers, Python Implementation, C++ Systems, MLOps.

Be passionate, precise, go as deep as the student wants. Connect questions to the broader curriculum when natural.

FORMATTING — KaTeX active:
- Inline math: $expression$ — Display math: $$expression$$
- Code: triple backtick + language — Bold: **term** — Insight: > text`;

const MAP_PROMPT = `You are an elite AI/ML professor generating a structured lesson plan.

For the topic "{TITLE}" ({SUB}), produce a complete lesson map listing every concept that must be mastered.
The number of sections should reflect the genuine depth of the topic — do not cap or pad artificially.

Respond ONLY in this exact JSON format, no extra text:
{
  "sections": [
    { "id": 1, "title": "Section title", "summary": "One sentence on what this covers" },
    { "id": 2, "title": "Section title", "summary": "One sentence on what this covers" }
  ]
}`;

const SECTION_PROMPT = `You are an elite AI/ML professor teaching section {INDEX} of {TOTAL} in a structured lesson on "{TOPIC}".

This section: "{SECTION_TITLE}" — {SECTION_SUMMARY}

Teach ONLY this section. Stay scoped. Go deep — show the math, intuition, geometry, and code when relevant.
End with ONE short check question labeled exactly: **Check:** [your question]

FORMATTING — KaTeX active:
- Inline math: $expression$ — Display math (own line): $$expression$$
- Multi-step derivations: multiple $$ blocks, one per step — never \\begin{align}
- Code: triple backtick + language — Bold: **term** — Header: ### Title — Insight: > text
- Be passionate. Say when math is beautiful.`;

const EXERCISE_PROMPT = `You are an elite AI/ML professor. The student just completed a full lesson on "{TOPIC}".

Generate adaptive exercises suited to this topic's nature:
- For foundational/mathematical topics (set theory, probability, linear algebra): use proof exercises, logical reasoning, worked examples — NOT just coding
- For implementation topics (backprop, optimizers, transformers): use coding exercises
- Mix as appropriate for hybrid topics

Format exactly:
### Exercises

**Exercise 1 — Foundation**
Goal, task description, success criteria, one Hint.

**Exercise 2 — Apply**
Goal, task description, success criteria, one Hint.

**Exercise 3 — Challenge**
Goal, task description, success criteria, one Hint.`;

// ─── KATEX ────────────────────────────────────────────────────────────────────

function useKaTeX() {
  const [ready, setReady] = useState(!!window.katex);
  useEffect(() => {
    if (window.katex) { setReady(true); return; }
    if (!document.getElementById("ktx-css")) {
      const l = document.createElement("link"); l.id="ktx-css"; l.rel="stylesheet";
      l.href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css";
      document.head.appendChild(l);
    }
    if (document.getElementById("ktx-js")) return;
    const s = document.createElement("script"); s.id="ktx-js";
    s.src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js";
    s.onload=()=>setReady(true); s.onerror=()=>console.warn("KaTeX failed");
    document.head.appendChild(s);
  }, []);
  return ready;
}

function esc(s) { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

function tex(math, display, ready) {
  if (!ready||!window.katex) {
    const inner=esc(math.trim());
    return display?`<span class="math-fb-d">${inner}</span>`:`<span class="math-fb-i">${inner}</span>`;
  }
  try { return window.katex.renderToString(math.trim(),{displayMode:display,throwOnError:false,strict:false,trust:true,macros:{"\\R":"\\mathbb{R}","\\N":"\\mathbb{N}"}}); }
  catch(e) { return `<span class="math-fb-i">${esc(math)}</span>`; }
}

function buildHtml(raw, ready) {
  const slots=[]; const slot=(html)=>{const k=`\x00${slots.length}\x00`;slots.push(html);return k;};
  let t=raw.replace(/```([\w+-]*)\r?\n([\s\S]*?)```/g,(_,lang,code)=>slot(`<div class="cb"><div class="cbl">${esc(lang||"code")}</div><pre><code>${esc(code.trimEnd())}</code></pre></div>`));
  t=t.replace(/\$\$\s*([\s\S]+?)\s*\$\$/g,(_,m)=>slot(`<div class="dmath">${tex(m,true,ready)}</div>`));
  t=t.replace(/\$([^$\r\n]+?)\$/g,(_,m)=>slot(`<span class="imath">${tex(m,false,ready)}</span>`));
  t=t.replace(/^#### (.+)$/gm,"<h4>$1</h4>").replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>")
    .replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")
    .replace(/`([^`\r\n]+)`/g,`<code class="ic">$1</code>`).replace(/\n\n+/g,"</p><p>").replace(/\n/g,"<br/>");
  t=`<p>${t}</p>`;
  slots.forEach((v,i)=>{t=t.split(`\x00${i}\x00`).join(v);});
  return t;
}

function MsgRenderer({content,ready,accent}) {
  const html=useMemo(()=>buildHtml(content,ready),[content,ready]);
  return <div className="msgbody" style={{"--ac":accent}} dangerouslySetInnerHTML={{__html:html}}/>;
}

function Dots({color}) {
  return <span style={{display:"flex",gap:6,padding:"10px 0"}}>{[0,1,2].map(i=><span key={i} style={{width:7,height:7,borderRadius:"50%",background:color,display:"inline-block",animation:`dp 1.3s ease ${i*.22}s infinite`}}/>)}</span>;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function Prof() {
  const [view, setView]               = useState("home");
  const [topic, setTopic]             = useState(null);
  const [lessonMap, setLessonMap]     = useState(null);
  const [sectionIdx, setSectionIdx]   = useState(0);
  const [sectionMsgs, setSectionMsgs] = useState([]);
  const [freeMsgs, setFreeMsgs]       = useState([]);
  const [input, setInput]             = useState("");
  const [busy, setBusy]               = useState(false);
  const [expanded, setExpanded]       = useState(null);
  const [lessonPhase, setLessonPhase] = useState("map"); // "map"|"learning"|"exercises"
  const [exerciseContent, setExerciseContent] = useState(null);
  const endRef = useRef(null);
  const taRef  = useRef(null);
  const ready  = useKaTeX();

  // progress[topicId] = { sectionsCompleted: N, totalSections: N, done: bool }
  const [progress, setProgress] = useState(() => {
    try { const s=localStorage.getItem("professor-progress"); return s?JSON.parse(s):{} } catch { return {}; }
  });
  useEffect(()=>{ localStorage.setItem("professor-progress",JSON.stringify(progress)); },[progress]);

  // ── SECTION CACHE — stores professor responses per section ───────────────
  // Key format: "topicId:sectionIdx", value: { msgs: [...], savedAt: timestamp }
  const sectionCacheKey = (topicId, idx) => `sc:${topicId}:${idx}`;
  function loadSectionCache(topicId, idx) {
    try {
      const raw = localStorage.getItem(sectionCacheKey(topicId, idx));
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }
  function saveSectionCache(topicId, idx, msgs) {
    try {
      localStorage.setItem(sectionCacheKey(topicId, idx), JSON.stringify({
        msgs, savedAt: Date.now()
      }));
    } catch(e) { console.warn("Cache save failed", e); }
  }
  function clearSectionCache(topicId, idx) {
    localStorage.removeItem(sectionCacheKey(topicId, idx));
  }
  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:"smooth"}); },[sectionMsgs,freeMsgs,busy,lessonMap,lessonPhase,exerciseContent]);

  async function api(messages, system) {
    const r = await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages,system})});
    const d = await r.json();
    return d.text || "Error.";
  }

  // FREE SESSION
  async function sendFree(text) {
    if(!text?.trim()||busy) return;
    const newMsgs=[...freeMsgs,{role:"user",content:text}];
    setFreeMsgs(newMsgs); setInput(""); setBusy(true);
    if(taRef.current) taRef.current.style.height="52px";
    const reply=await api(newMsgs,FREE_SESSION_PROMPT);
    setFreeMsgs([...newMsgs,{role:"assistant",content:reply}]);
    setBusy(false);
  }

  // START LESSON — load static map, resume from saved progress
  function startLesson(t, domain) {
    const full={...t,domainColor:domain.color,domainName:domain.domain};
    const map = CURRICULUM_MAPS[t.id] || [{id:1,title:t.title,summary:t.depth}];
    const saved = progress[t.id];
    // Resume from last completed section, or start from 0
    const resumeIdx = saved ? Math.min(saved.sectionsCompleted, map.length - 1) : 0;
    setTopic(full);
    setLessonMap(map);
    setSectionIdx(resumeIdx);
    setSectionMsgs([]);
    setExerciseContent(null);
    setLessonPhase("map");
    setView("lesson");
  }

  // TEACH A SECTION — checks cache first, fetches from API only if not cached
  async function teachSection(idx, map, forceRefresh=false) {
    const sec = map[idx];
    setSectionIdx(idx); setSectionMsgs([]); setLessonPhase("learning");

    // Check cache
    const cached = !forceRefresh && loadSectionCache(topic.id, idx);
    if (cached) {
      setSectionMsgs(cached.msgs);
      // Still update progress in case user jumped to this section directly
      setProgress(p=>({...p,[topic.id]:{
        sectionsCompleted: Math.max((p[topic.id]?.sectionsCompleted||0), idx+1),
        totalSections: map.length,
        done: p[topic.id]?.done || false
      }}));
      return; // No API call needed
    }

    // Not cached — fetch from API
    setBusy(true);
    const sys = SECTION_PROMPT.replace("{INDEX}",idx+1).replace("{TOTAL}",map.length)
      .replace("{TOPIC}",topic.title).replace("{SECTION_TITLE}",sec.title).replace("{SECTION_SUMMARY}",sec.summary);
    const reply = await api([{role:"user",content:`Teach: ${sec.title}`}],sys);
    const msgs = [{role:"assistant",content:reply}];
    setSectionMsgs(msgs);
    saveSectionCache(topic.id, idx, msgs); // Save for future visits
    setBusy(false);
    setProgress(p=>({...p,[topic.id]:{
      sectionsCompleted: Math.max((p[topic.id]?.sectionsCompleted||0), idx+1),
      totalSections: map.length,
      done: p[topic.id]?.done || false
    }}));
  }

  // QUESTION INSIDE LESSON
  async function sendInLesson(text) {
    if(!text?.trim()||busy) return;
    const sec=lessonMap[sectionIdx];
    const sys=SECTION_PROMPT.replace("{INDEX}",sectionIdx+1).replace("{TOTAL}",lessonMap.length)
      .replace("{TOPIC}",topic.title).replace("{SECTION_TITLE}",sec.title).replace("{SECTION_SUMMARY}",sec.summary)
      +`\n\nThe student is asking a question about this section. Answer clearly and concisely, then gently return to the lesson flow.`;
    const newMsgs=[...sectionMsgs,{role:"user",content:text}];
    setSectionMsgs(newMsgs); setInput(""); setBusy(true);
    if(taRef.current) taRef.current.style.height="46px";
    const reply=await api(newMsgs,sys);
    const updatedMsgs = [...newMsgs,{role:"assistant",content:reply}];
    setSectionMsgs(updatedMsgs);
    saveSectionCache(topic.id, sectionIdx, updatedMsgs); // Update cache with Q&A
    setBusy(false);
  }

  // GENERATE EXERCISES
  async function generateExercises() {
    setBusy(true); setLessonPhase("exercises");
    const sys=EXERCISE_PROMPT.replace("{TOPIC}",topic.title);
    const reply=await api([{role:"user",content:`Generate exercises for: ${topic.title}`}],sys);
    setExerciseContent(reply); setBusy(false);
    setProgress(p=>({...p,[topic.id]:{
      sectionsCompleted: lessonMap.length,
      totalSections: lessonMap.length,
      done: true
    }}));
  }

  function resetProgress() { setProgress({}); localStorage.removeItem("professor-progress"); }
  function goHome() { setView("home");setTopic(null);setLessonMap(null);setSectionMsgs([]);setFreeMsgs([]);setLessonPhase("map");setExerciseContent(null); }

  const total=CURRICULUM.reduce((a,d)=>a+d.topics.length,0);
  const done=Object.keys(progress).filter(k=>progress[k]?.sectionsCompleted>0).length;
  const ac=topic?.domainColor||"#D4A96A";
  const isLast=lessonMap&&sectionIdx===lessonMap.length-1;

  return (
    <div style={{width:"100%",minHeight:"100vh",background:"#080808",color:"#E2D9CE",fontFamily:"Palatino Linotype,Palatino,serif",display:"flex",flexDirection:"column"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap');
        *{box-sizing:border-box}
        @keyframes fi{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes si{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
        @keyframes dp{0%,100%{opacity:.2;transform:scale(.72)}50%{opacity:1;transform:scale(1.2)}}
        ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:#0C0C0C}::-webkit-scrollbar-thumb{background:#252525;border-radius:2px}
        textarea{resize:none;outline:none}
        .msgbody{font-size:15px;line-height:1.88;color:#D8D0C6}
        .msgbody p{margin:0 0 14px}
        .msgbody h3{font-size:17px;font-weight:700;color:#EAE2D8;margin:28px 0 10px;letter-spacing:.3px}
        .msgbody h4{font-size:15px;font-weight:700;color:#C8BEB4;margin:20px 0 8px}
        .msgbody strong{color:var(--ac);font-weight:700}
        .msgbody blockquote{border-left:3px solid var(--ac);margin:20px 0;padding:12px 22px;background:rgba(255,255,255,.04);border-radius:0 8px 8px 0;color:#C8BEB0;font-style:italic;font-size:14.5px}
        .dmath{margin:22px 0;padding:16px 22px;background:#0C0C0C;border-left:2px solid var(--ac,#D4A96A);border-radius:0 8px 8px 0;overflow-x:auto}
        .imath{display:inline}
        .cb{margin:18px 0;background:#0C0C0C;border:1px solid #1E1E1E;border-radius:10px;overflow:hidden}
        .cbl{background:#141414;padding:5px 16px;font-family:'JetBrains Mono',monospace;font-size:10px;color:#555;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid #1A1A1A}
        .cb pre{margin:0;padding:18px 20px;font-family:'JetBrains Mono',monospace;font-size:12.5px;line-height:1.75;color:#95D4A8;overflow-x:auto}
        .ic{background:#161616;color:#95D4A8;padding:2px 7px;border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.87em}
        .katex{font-size:1.08em}.katex-display{margin:0}
        .math-fb-d{display:block;font-family:'JetBrains Mono',monospace;font-size:13px;color:#A8C8A0;background:#0C0C0C;padding:12px 18px;border-left:2px solid var(--ac,#D4A96A);border-radius:0 6px 6px 0;margin:16px 0;white-space:pre-wrap;opacity:.8}
        .math-fb-i{font-family:'JetBrains Mono',monospace;font-size:.88em;color:#A8C8A0;opacity:.85}
        .trow{transition:background .15s;border-radius:4px}.trow:hover{background:rgba(255,255,255,.04)!important;cursor:pointer}
        .dhdr:hover{opacity:.78;cursor:pointer}
        .sndbtn:hover:not(:disabled){filter:brightness(1.15)}
        .bbtn:hover{color:#D4A96A!important}
        .resetbtn:hover{color:#C97B7B!important;border-color:#C97B7B44!important}
        .navbtn:hover{opacity:.75!important}
        .nextbtn:hover{filter:brightness(1.12)}
      `}</style>

      {/* HEADER */}
      <header style={{borderBottom:"1px solid #131313",padding:"17px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#080808",position:"sticky",top:0,zIndex:200}}>
        <div style={{display:"flex",alignItems:"center",gap:14}}>
          {view!=="home" && <button className="bbtn" onClick={goHome} style={{background:"none",border:"none",color:"#555",fontSize:22,padding:"0 10px 0 0",fontFamily:"serif",cursor:"pointer",transition:"color .2s"}}>←</button>}
          <div>
            <div style={{fontSize:9,letterSpacing:4.5,color:"#353535",fontFamily:"'JetBrains Mono',monospace",textTransform:"uppercase"}}>PROFESSOR · AI</div>
            <div style={{fontSize:17,fontWeight:700,color:"#E2D9CE",letterSpacing:.4}}>
              {view==="home"?"Machine Intelligence":view==="free"?"Free Session":topic?.title}
            </div>
          </div>
        </div>
        {view==="home" ? (
          <div style={{display:"flex",alignItems:"center",gap:16}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5}}>
              <div style={{fontSize:11,color:"#383838",fontFamily:"'JetBrains Mono',monospace"}}><span style={{color:"#D4A96A"}}>{done}</span>/{total} explored</div>
              <div style={{width:120,height:3,background:"#1A1A1A",borderRadius:2,overflow:"hidden"}}>
                <div style={{width:`${(done/total)*100}%`,height:"100%",background:"#D4A96A",borderRadius:2,transition:"width .4s ease"}}/>
              </div>
            </div>
            {done>0 && <button className="resetbtn" onClick={resetProgress} style={{background:"none",border:"1px solid #2A2A2A",color:"#3A3A3A",borderRadius:6,padding:"5px 10px",fontSize:9,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",letterSpacing:1.5,transition:"all .2s"}}>RESET</button>}
          </div>
        ) : view==="lesson"&&topic ? (
          <div style={{fontSize:9,color:ac,letterSpacing:2.5,fontFamily:"'JetBrains Mono',monospace",textTransform:"uppercase"}}>{topic.domainName}</div>
        ) : null}
      </header>

      {/* ══ HOME ══ */}
      {view==="home" && (
        <div style={{flex:1,overflowY:"auto"}}>
          <div style={{maxWidth:800,margin:"0 auto",padding:"54px 40px 44px"}}>
            <div style={{fontSize:9,letterSpacing:5,color:"#2E2E2E",fontFamily:"'JetBrains Mono',monospace",marginBottom:20}}>THE COMPLETE PATH</div>
            <h1 style={{fontSize:46,fontWeight:400,lineHeight:1.17,margin:"0 0 20px",color:"#E2D9CE"}}>From probability axioms<br/><em style={{color:"#D4A96A"}}>to production transformers.</em></h1>
            <p style={{color:"#505050",fontSize:15.5,lineHeight:1.9,margin:"0 0 34px",maxWidth:540}}>
              Choose a topic for a structured lesson with a clear map, guided sections, and adaptive exercises — or open a free session to explore any question.
            </p>
            <button onClick={()=>{setFreeMsgs([]);setView("free");}} style={{background:"#D4A96A",color:"#080808",border:"none",borderRadius:8,padding:"11px 28px",fontSize:11.5,fontWeight:700,letterSpacing:2,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>OPEN FREE SESSION →</button>
          </div>
          <div style={{maxWidth:800,margin:"0 auto",padding:"0 40px 80px"}}>
            {CURRICULUM.map((domain,di)=>(
              <div key={domain.domain} style={{marginBottom:2,animation:`si .28s ease ${di*.04}s both`}}>
                <div className="dhdr" onClick={()=>setExpanded(expanded===domain.domain?null:domain.domain)}
                  style={{display:"flex",alignItems:"center",gap:14,padding:"19px 4px 17px",borderBottom:"1px solid #111",transition:"opacity .2s"}}>
                  <span style={{fontSize:22,color:domain.color,width:32,textAlign:"center",fontFamily:"monospace",flexShrink:0}}>{domain.glyph}</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:10,letterSpacing:3.5,color:domain.color,fontFamily:"'JetBrains Mono',monospace"}}>{domain.domain}</div>
                    <div style={{fontSize:12,color:"#404040",marginTop:3,fontStyle:"italic"}}>{domain.desc}</div>
                  </div>
                  <div style={{fontSize:10,color:"#303030",fontFamily:"'JetBrains Mono',monospace",display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
                    <span style={{color:domain.topics.some(t=>progress[t.id]?.sectionsCompleted>0)?domain.color:"#303030"}}>
                      {domain.topics.filter(t=>progress[t.id]?.done).length}/{domain.topics.length}
                    </span>
                    <span style={{fontSize:16,transition:"transform .22s",display:"inline-block",transform:expanded===domain.domain?"rotate(90deg)":"none"}}>›</span>
                  </div>
                </div>
                {expanded===domain.domain && (
                  <div style={{animation:"fi .22s ease"}}>
                    {domain.topics.map((t,ti)=>(
                      <div key={t.id} className="trow" onClick={()=>startLesson(t,domain)}
                        style={{display:"flex",alignItems:"center",gap:14,padding:"14px 8px 14px 46px",borderBottom:"1px solid #0D0D0D",animation:`fi .18s ease ${ti*.03}s both`}}>
                        <div style={{width:6,height:6,borderRadius:"50%",flexShrink:0,
                          background:progress[t.id]?.done?domain.color:progress[t.id]?.sectionsCompleted>0?"transparent":"transparent",
                          border:`1px solid ${progress[t.id]?.sectionsCompleted>0?domain.color:"#282828"}`}}/>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{fontSize:14.5,color:progress[t.id]?.sectionsCompleted>0?"#E2D9CE":"#9A9490",marginBottom:3}}>{t.title}</div>
                          <div style={{fontSize:11.5,color:"#363432",fontStyle:"italic"}}>{t.sub}</div>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:3,flexShrink:0}}>
                          {progress[t.id]?.sectionsCompleted>0 && (
                            <span style={{fontSize:9,color:domain.color,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,opacity:.8}}>
                              {progress[t.id].done?"✓ DONE":`${progress[t.id].sectionsCompleted}/${progress[t.id].totalSections||CURRICULUM_MAPS[t.id]?.length||"?"}`}
                            </span>
                          )}
                          <span style={{color:domain.color,fontSize:13,opacity:.4}}>→</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══ FREE SESSION ══ */}
      {view==="free" && (
        <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{flex:1,overflowY:"auto",padding:"36px 0 20px"}}>
            <div style={{maxWidth:800,margin:"0 auto",padding:"0 36px"}}>
              {freeMsgs.length===0&&!busy&&(
                <div style={{textAlign:"center",padding:"80px 0",animation:"fi .4s ease"}}>
                  <div style={{fontSize:54,opacity:.1,marginBottom:18,fontFamily:"monospace",color:"#D4A96A"}}>∑</div>
                  <div style={{color:"#363432",fontStyle:"italic",fontSize:14,maxWidth:400,margin:"0 auto"}}>Ask anything about AI/ML. The professor knows the full curriculum and will connect your questions to the bigger picture.</div>
                </div>
              )}
              {freeMsgs.map((m,i)=>(
                <div key={i} style={{marginBottom:38,animation:"fi .3s ease"}}>
                  <div style={{fontSize:9,letterSpacing:3.5,fontFamily:"'JetBrains Mono',monospace",marginBottom:10,textTransform:"uppercase",color:m.role==="user"?"#484440":"#D4A96A"}}>{m.role==="user"?"YOU":"PROFESSOR"}</div>
                  {m.role==="assistant"
                    ?<div style={{paddingLeft:18,borderLeft:"2px solid #181818"}}><MsgRenderer content={m.content} ready={ready} accent="#D4A96A"/></div>
                    :<div style={{color:"#7A7470",fontSize:15,lineHeight:1.75}}>{m.content}</div>}
                </div>
              ))}
              {busy&&<div style={{animation:"fi .25s ease"}}><div style={{fontSize:9,letterSpacing:3.5,fontFamily:"'JetBrains Mono',monospace",marginBottom:8,color:"#D4A96A"}}>PROFESSOR</div><div style={{paddingLeft:18,borderLeft:"2px solid #181818"}}><Dots color="#D4A96A"/></div></div>}
              <div ref={endRef}/>
            </div>
          </div>
          <div style={{borderTop:"1px solid #111",padding:"18px 36px 22px",background:"#080808"}}>
            <div style={{maxWidth:800,margin:"0 auto",display:"flex",gap:12,alignItems:"flex-end"}}>
              <textarea ref={taRef} value={input} onChange={e=>setInput(e.target.value)}
                onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendFree(input);}}}
                onInput={e=>{e.target.style.height="auto";e.target.style.height=Math.min(e.target.scrollHeight,180)+"px";}}
                placeholder="Ask anything about AI/ML..."
                style={{flex:1,background:"#0E0E0E",border:"1px solid #1C1C1C",borderRadius:10,padding:"14px 18px",color:"#E2D9CE",fontSize:14.5,fontFamily:"Palatino Linotype,Palatino,serif",lineHeight:1.65,minHeight:52,transition:"border-color .2s"}}
                onFocus={e=>e.target.style.borderColor="#2A2A2A"} onBlur={e=>e.target.style.borderColor="#1C1C1C"}/>
              <button className="sndbtn" onClick={()=>sendFree(input)} disabled={busy||!input.trim()}
                style={{background:(!busy&&input.trim())?"#D4A96A":"#141414",color:(!busy&&input.trim())?"#080808":"#282828",border:"none",borderRadius:10,width:52,height:52,fontSize:20,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s",cursor:busy||!input.trim()?"not-allowed":"pointer"}}>→</button>
            </div>
          </div>
        </div>
      )}

      {/* ══ LESSON ══ */}
      {view==="lesson" && (
        <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{flex:1,overflowY:"auto",padding:"36px 0 20px"}}>
            <div style={{maxWidth:800,margin:"0 auto",padding:"0 36px"}}>

              {/* MAP PHASE */}
              {lessonPhase==="map" && (
                <div style={{animation:"fi .4s ease"}}>
                  {lessonMap && (
                    <div>
                      <div style={{fontSize:9,letterSpacing:4,color:ac,fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>LESSON MAP</div>
                      <h2 style={{fontSize:28,fontWeight:400,color:"#E2D9CE",margin:"0 0 6px"}}>{topic.title}</h2>
                      <p style={{color:"#505050",fontSize:13,fontStyle:"italic",margin:"0 0 32px"}}>
                        {lessonMap.length} sections
                        {progress[topic?.id]?.sectionsCompleted>0 && !progress[topic?.id]?.done && (
                          <span style={{color:ac,marginLeft:12}}>· {progress[topic?.id].sectionsCompleted}/{lessonMap.length} completed — resuming from section {sectionIdx+1}</span>
                        )}
                        {progress[topic?.id]?.done && (
                          <span style={{color:ac,marginLeft:12}}>· ✓ completed</span>
                        )}
                        {!progress[topic?.id]?.sectionsCompleted && (
                          <span style={{marginLeft:8}}>· click any section to jump in</span>
                        )}
                      </p>
                      {lessonMap.map((sec,i)=>(
                        <div key={sec.id} className="trow" onClick={()=>teachSection(i,lessonMap)}
                          style={{display:"flex",alignItems:"flex-start",gap:16,padding:"16px 12px",borderBottom:"1px solid #0D0D0D",cursor:"pointer",animation:`fi .15s ease ${i*.03}s both`,
                          background: i===sectionIdx&&progress[topic?.id]?.sectionsCompleted>0?"rgba(255,255,255,.02)":"transparent"}}>
                          <div style={{fontSize:11,fontFamily:"'JetBrains Mono',monospace",minWidth:24,marginTop:3,
                            color: progress[topic?.id]?.sectionsCompleted>i ? ac : "#333",
                            opacity: progress[topic?.id]?.sectionsCompleted>i ? 0.8 : 0.4}}>
                            {progress[topic?.id]?.sectionsCompleted>i ? "✓" : String(i+1).padStart(2,"0")}
                          </div>
                          <div style={{flex:1}}>
                            <div style={{fontSize:15,color:progress[topic?.id]?.sectionsCompleted>i?"#E2D9CE":"#C8C0B6",marginBottom:3}}>{sec.title}</div>
                            <div style={{fontSize:12,color:"#363432",fontStyle:"italic"}}>{sec.summary}</div>
                          </div>
                          <span style={{color:ac,fontSize:13,opacity:.3,marginTop:3}}>→</span>
                        </div>
                      ))}
                      <div style={{marginTop:28,display:"flex",gap:12,alignItems:"center"}}>
                        {progress[topic?.id]?.sectionsCompleted>0 && !progress[topic?.id]?.done && (
                          <button className="nextbtn" onClick={()=>teachSection(sectionIdx,lessonMap)}
                            style={{background:ac,color:"#080808",border:"none",borderRadius:8,padding:"12px 28px",fontSize:11,fontWeight:700,letterSpacing:2,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",transition:"all .2s"}}>
                            RESUME SECTION {sectionIdx+1} →
                          </button>
                        )}
                        {(!progress[topic?.id]?.sectionsCompleted || progress[topic?.id]?.done) && (() => {
                          const isDone = progress[topic?.id]?.done;
                          return (
                            <button className="nextbtn" onClick={()=>teachSection(0,lessonMap)}
                              style={{
                                background: isDone ? "#1A1A1A" : ac,
                                color: isDone ? ac : "#080808",
                                border: isDone ? "1px solid " + ac + "44" : "none",
                                borderRadius:8, padding:"12px 28px", fontSize:11, fontWeight:700,
                                letterSpacing:2, fontFamily:"'JetBrains Mono',monospace",
                                cursor:"pointer", transition:"all .2s"
                              }}>
                              {isDone ? "REVIEW FROM START →" : "BEGIN LESSON →"}
                            </button>
                          );
                        })()}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* LEARNING PHASE */}
              {lessonPhase==="learning" && lessonMap && (
                <div style={{animation:"fi .3s ease"}}>
                  {/* Progress bar */}
                  <div style={{display:"flex",gap:3,marginBottom:24}}>
                    {lessonMap.map((_,i)=>(
                      <div key={i} style={{flex:1,height:2,borderRadius:1,
                        background:i<=sectionIdx?ac:"#1A1A1A",
                        opacity:i===sectionIdx?1:i<sectionIdx?.45:.2,
                        transition:"all .3s"}}/>
                    ))}
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:5}}>
                    <div style={{fontSize:9,letterSpacing:3.5,color:ac,fontFamily:"'JetBrains Mono',monospace"}}>SECTION {sectionIdx+1} / {lessonMap.length}</div>
                    {loadSectionCache(topic.id, sectionIdx) && (
                      <button onClick={()=>teachSection(sectionIdx,lessonMap,true)}
                        title="Fetch a fresh explanation"
                        style={{background:"none",border:"none",color:"#2A2A2A",fontSize:11,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",letterSpacing:1,padding:0,transition:"color .2s"}}
                        onMouseOver={e=>e.target.style.color="#555"} onMouseOut={e=>e.target.style.color="#2A2A2A"}>
                        ↻ refresh
                      </button>
                    )}
                  </div>
                  <div style={{fontSize:21,color:"#E2D9CE",marginBottom:6,fontWeight:400}}>{lessonMap[sectionIdx].title}</div>
                  <div style={{fontSize:12,color:"#363432",fontStyle:"italic",marginBottom:28}}>{lessonMap[sectionIdx].summary}</div>

                  {sectionMsgs.map((m,i)=>(
                    <div key={i} style={{marginBottom:38,animation:"fi .3s ease"}}>
                      <div style={{fontSize:9,letterSpacing:3.5,fontFamily:"'JetBrains Mono',monospace",marginBottom:10,textTransform:"uppercase",color:m.role==="user"?"#484440":ac}}>{m.role==="user"?"YOU":"PROFESSOR"}</div>
                      {m.role==="assistant"
                        ?<div style={{paddingLeft:18,borderLeft:"2px solid #181818"}}><MsgRenderer content={m.content} ready={ready} accent={ac}/></div>
                        :<div style={{color:"#7A7470",fontSize:15,lineHeight:1.75}}>{m.content}</div>}
                    </div>
                  ))}
                  {busy&&<div style={{animation:"fi .25s ease"}}><div style={{fontSize:9,letterSpacing:3.5,fontFamily:"'JetBrains Mono',monospace",marginBottom:8,color:ac}}>PROFESSOR</div><div style={{paddingLeft:18,borderLeft:"2px solid #181818"}}><Dots color={ac}/></div></div>}
                </div>
              )}

              {/* EXERCISES PHASE */}
              {lessonPhase==="exercises" && (
                <div style={{animation:"fi .3s ease"}}>
                  <div style={{fontSize:9,letterSpacing:4,color:ac,fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>EXERCISES</div>
                  <div style={{fontSize:22,color:"#E2D9CE",marginBottom:28,fontWeight:400}}>{topic.title}</div>
                  {busy
                    ?<div style={{paddingLeft:18,borderLeft:"2px solid #181818"}}><Dots color={ac}/></div>
                    :exerciseContent&&<div style={{paddingLeft:18,borderLeft:"2px solid #181818"}}><MsgRenderer content={exerciseContent} ready={ready} accent={ac}/></div>
                  }
                  {!busy&&exerciseContent&&(
                    <div style={{marginTop:36,padding:"20px 24px",background:"#0C0C0C",border:`1px solid ${ac}22`,borderRadius:10}}>
                      <div style={{fontSize:11,color:ac,fontFamily:"'JetBrains Mono',monospace",letterSpacing:2,marginBottom:6}}>✓ LESSON COMPLETE</div>
                      <div style={{fontSize:13,color:"#505050",fontStyle:"italic",marginBottom:16}}>You've covered all {lessonMap.length} sections of {topic.title}.</div>
                      <button onClick={goHome} style={{background:"none",border:`1px solid ${ac}44`,color:ac,borderRadius:6,padding:"8px 18px",fontSize:11,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",letterSpacing:1}}>← BACK TO CURRICULUM</button>
                    </div>
                  )}
                </div>
              )}

              <div ref={endRef}/>
            </div>
          </div>

          {/* BOTTOM BAR — only in learning phase */}
          {lessonPhase==="learning" && !busy && sectionMsgs.length>0 && (
            <div style={{borderTop:"1px solid #111",padding:"14px 36px 18px",background:"#080808"}}>
              <div style={{maxWidth:800,margin:"0 auto"}}>
                <div style={{display:"flex",gap:10,alignItems:"flex-end",marginBottom:10}}>
                  <textarea ref={taRef} value={input} onChange={e=>setInput(e.target.value)}
                    onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendInLesson(input);}}}
                    onInput={e=>{e.target.style.height="auto";e.target.style.height=Math.min(e.target.scrollHeight,120)+"px";}}
                    placeholder="Ask a question about this section..."
                    style={{flex:1,background:"#0E0E0E",border:"1px solid #1C1C1C",borderRadius:10,padding:"12px 16px",color:"#E2D9CE",fontSize:14,fontFamily:"Palatino Linotype,Palatino,serif",lineHeight:1.6,minHeight:46,transition:"border-color .2s"}}
                    onFocus={e=>e.target.style.borderColor="#2A2A2A"} onBlur={e=>e.target.style.borderColor="#1C1C1C"}/>
                  <button className="sndbtn" onClick={()=>sendInLesson(input)} disabled={busy||!input.trim()}
                    style={{background:(!busy&&input.trim())?ac:"#141414",color:(!busy&&input.trim())?"#080808":"#282828",border:"none",borderRadius:10,width:46,height:46,fontSize:18,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s",cursor:busy||!input.trim()?"not-allowed":"pointer"}}>→</button>
                </div>
                <div style={{display:"flex",gap:8,justifyContent:"space-between",alignItems:"center"}}>
                  <button className="navbtn" onClick={()=>{setLessonPhase("map");}} style={{background:"none",border:"none",color:"#333",fontSize:11,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",letterSpacing:1,padding:0}}>⊟ MAP</button>
                  <div style={{display:"flex",gap:8}}>
                    {sectionIdx>0&&<button className="navbtn" onClick={()=>teachSection(sectionIdx-1,lessonMap)} style={{background:"none",border:"1px solid #1C1C1C",color:"#484440",borderRadius:7,padding:"7px 14px",fontSize:11,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",letterSpacing:1,transition:"all .2s"}}>← PREV</button>}
                    {!isLast
                      ?<button className="nextbtn" onClick={()=>teachSection(sectionIdx+1,lessonMap)} style={{background:ac,color:"#080808",border:"none",borderRadius:7,padding:"7px 18px",fontSize:11,fontWeight:700,letterSpacing:1.5,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",transition:"all .2s"}}>NEXT →</button>
                      :<button className="nextbtn" onClick={generateExercises} style={{background:ac,color:"#080808",border:"none",borderRadius:7,padding:"7px 18px",fontSize:11,fontWeight:700,letterSpacing:1.5,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",transition:"all .2s"}}>GET EXERCISES ⊞</button>
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}