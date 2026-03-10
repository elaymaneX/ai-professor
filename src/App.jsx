import { useState, useEffect, useRef, useMemo } from "react";

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

const SYSTEM_PROMPT = `You are an elite AI/ML professor — a synthesis of Andrej Karpathy's hands-on clarity, Yann LeCun's theoretical depth, and Richard Feynman's infectious joy.

Your mission: genuine understanding. Not summaries. Real depth that makes the student feel the click.

TEACHING STRUCTURE:
1. INTUITION — What problem does this solve? What would a smart person invent from scratch?
2. MATHEMATICS — Show actual derivations. Explain every symbol. Do not skip steps.
3. GEOMETRIC INTUITION — What does this look like in space?
4. CONNECTION — How does this link to information theory, probability, optimization?
5. PYTHON CODE — Real, runnable, well-commented. Start from numpy when educational.
6. THE AHA — Build toward the insight. Make them feel the click.
7. EXERCISES — Always end every lesson with 3 coding exercises (see format below).

EXERCISE FORMAT — always end lessons with this exact section:
### Exercises

**Exercise 1 — Foundation** *(~15 min)*
[A concrete coding task that implements the core concept from scratch in numpy/Python. Include a starter code skeleton and specify exactly what to implement. Describe a common error they will likely encounter and what it means.]

**Exercise 2 — Apply & Break** *(~25 min)*
[A task that uses PyTorch/real libraries to build something practical. Include intentionally tricky edge cases or a bug to find. They should run it, see it fail, understand why, and fix it.]

**Exercise 3 — Challenge** *(~45 min)*
[A harder project-level task that connects this topic to adjacent concepts. Open-ended enough to explore, specific enough to complete. Should produce a result they can visualize or measure.]

For each exercise include:
- Clear goal statement
- Starter code scaffold (they fill in the blanks)
- What success looks like (expected output/behavior)
- One hint hidden behind "Hint:" prefix they can choose to read

CRITICAL FORMATTING — a KaTeX renderer will parse these:
- Inline math: $expression$ e.g. $\\sigma(x) = \\frac{1}{1+e^{-x}}$ or $\\theta$
- Display math (own line, blank line before and after): $$expression$$
- For multi-step derivations use MULTIPLE $$ blocks, one per step — do NOT use \\begin{align}
- Code: triple backtick with language name (python, cpp, bash)
- Key insight: > text
- Bold term: **term**
- Section header: ### Title

TONE: Be passionate. Say when math is beautiful. Lean into counterintuitive surprises. This student wants mastery — the rush of everything making sense. Give them that.`;

const EXERCISE_PROMPT = `Generate 3 standalone coding exercises for the topic: "{TOPIC}".

These are practice exercises — no lesson content, just exercises.

Format exactly as:
### Exercises

**Exercise 1 — Foundation** *(~15 min)*
[numpy/pure Python implementation from scratch]

**Exercise 2 — Apply & Break** *(~25 min)*  
[PyTorch task with an intentional bug or tricky edge case to diagnose]

**Exercise 3 — Challenge** *(~45 min)*
[Project-level task connecting to adjacent concepts]

For each: clear goal, starter code scaffold, expected output, one Hint.
Make exercises that teach through doing — errors are features, not bugs.`;

function useKaTeX() {
  const [ready, setReady] = useState(!!window.katex);
  useEffect(() => {
    if (window.katex) { setReady(true); return; }
    if (!document.getElementById("ktx-css")) {
      const l = document.createElement("link");
      l.id = "ktx-css"; l.rel = "stylesheet";
      l.href = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css";
      document.head.appendChild(l);
    }
    if (document.getElementById("ktx-js")) return;
    const s = document.createElement("script");
    s.id = "ktx-js";
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js";
    s.onload = () => setReady(true);
    s.onerror = () => console.warn("KaTeX CDN failed");
    document.head.appendChild(s);
  }, []);
  return ready;
}

function esc(s) { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

function tex(math, display, ready) {
  if (!ready || !window.katex) {
    const inner = esc(math.trim());
    return display
      ? `<span class="math-fb-d">${inner}</span>`
      : `<span class="math-fb-i">${inner}</span>`;
  }
  try {
    return window.katex.renderToString(math.trim(), {
      displayMode: display, throwOnError: false, strict: false,
      trust: true, macros: { "\\R": "\\mathbb{R}", "\\N": "\\mathbb{N}" },
    });
  } catch(e) {
    return `<span class="math-fb-i">${esc(math)}</span>`;
  }
}

function buildHtml(raw, ready) {
  const slots = [];
  const slot = (html) => { const k = `\x00${slots.length}\x00`; slots.push(html); return k; };

  let t = raw.replace(/```([\w+-]*)\r?\n([\s\S]*?)```/g, (_, lang, code) =>
    slot(`<div class="cb"><div class="cbl">${esc(lang||"code")}</div><pre><code>${esc(code.trimEnd())}</code></pre></div>`)
  );

  t = t.replace(/\$\$\s*([\s\S]+?)\s*\$\$/g, (_, m) =>
    slot(`<div class="dmath">${tex(m, true, ready)}</div>`)
  );

  t = t.replace(/\$([^$\r\n]+?)\$/g, (_, m) =>
    slot(`<span class="imath">${tex(m, false, ready)}</span>`)
  );

  t = t
    .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
    .replace(/^### (.+)$/gm,  "<h3>$1</h3>")
    .replace(/^## (.+)$/gm,   "<h2>$1</h2>")
    .replace(/^> (.+)$/gm,    "<blockquote>$1</blockquote>")
    .replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")
    .replace(/`([^`\r\n]+)`/g,`<code class="ic">$1</code>`)
    .replace(/\n\n+/g, "</p><p>")
    .replace(/\n/g, "<br/>");

  t = `<p>${t}</p>`;

  slots.forEach((v, i) => { t = t.split(`\x00${i}\x00`).join(v); });
  return t;
}

function MsgRenderer({ content, ready, accent }) {
  const html = useMemo(() => buildHtml(content, ready), [content, ready]);
  return (
    <div className="msgbody" style={{ "--ac": accent }}
      dangerouslySetInnerHTML={{ __html: html }} />
  );
}

function Dots({ color }) {
  return (
    <span style={{ display:"flex", gap:6, padding:"10px 0" }}>
      {[0,1,2].map(i => (
        <span key={i} style={{ width:7,height:7,borderRadius:"50%",background:color,
          display:"inline-block",animation:`dp 1.3s ease ${i*.22}s infinite` }}/>
      ))}
    </span>
  );
}

export default function Prof() {
  const [view, setView]         = useState("home");
  const [topic, setTopic]       = useState(null);
  const [msgs, setMsgs]         = useState([]);
  const [input, setInput]       = useState("");
  const [busy, setBusy]         = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [exerciseMode, setExerciseMode] = useState(false);
  const endRef                  = useRef(null);
  const taRef                   = useRef(null);
  const ready                   = useKaTeX();

  // ── PERSISTENT PROGRESS ──────────────────────────────────────────────────
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem("professor-progress");
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("professor-progress", JSON.stringify(progress));
  }, [progress]);

  // ── LAST VISITED TOPIC (so the counter shows your latest session) ─────────
  useEffect(() => {
    try {
      const lastTopic = localStorage.getItem("professor-last-topic");
      if (lastTopic) setTopic(JSON.parse(lastTopic));
    } catch {}
  }, []);
  // ─────────────────────────────────────────────────────────────────────────

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, busy]);

  async function api(messages, t, sysOverride) {
    const ctx = t ? `\n\nCurrent topic: "${t.title}" — ${t.sub}\nDepth: ${t.depth}` : "";
    const system = (sysOverride || SYSTEM_PROMPT) + ctx;
    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, system }),
    });
    const d = await r.json();
    return d.text || "Error.";
  }

  async function startTopic(t, domain) {
    const full = { ...t, domainColor: domain.color, domainName: domain.domain };
    setTopic(full);
    localStorage.setItem("professor-last-topic", JSON.stringify(full));
    setMsgs([]); setView("chat"); setBusy(true); setExerciseMode(false);
    const opener = { role:"user", content:`Teach me **${t.title}** with full depth. Start from pure intuition, build to the complete mathematics, show the geometry, finish with Python code and exercises. I want the aha moment.` };
    const reply = await api([opener], full);
    setMsgs([opener, { role:"assistant", content:reply }]);
    setBusy(false);
    setProgress(p => ({ ...p, [t.id]: Math.max(p[t.id]||0, 1) }));
  }

  async function getExercises() {
    if (!topic || busy) return;
    setBusy(true); setExerciseMode(true);
    const sys = EXERCISE_PROMPT.replace("{TOPIC}", topic.title);
    const req = { role:"user", content:`Give me 3 coding exercises for: ${topic.title}` };
    const reply = await api([req], topic, sys);
    setMsgs(m => [...m, req, { role:"assistant", content: reply }]);
    setBusy(false);
  }

  async function send(text, base) {
    if (!text?.trim() || busy) return;
    const newMsgs = [...(base ?? msgs), { role:"user", content: text }];
    setMsgs(newMsgs); setInput(""); setBusy(true);
    if (taRef.current) taRef.current.style.height = "52px";
    const reply = await api(newMsgs, topic);
    setMsgs([...newMsgs, { role:"assistant", content: reply }]);
    setBusy(false);
    if (topic) setProgress(p => ({ ...p, [topic.id]: Math.max(p[topic.id]||0, newMsgs.filter(m=>m.role==="user").length) }));
  }

  function resetProgress() {
    setProgress({});
    localStorage.removeItem("professor-progress");
    localStorage.removeItem("professor-last-topic");
  }

  const total = CURRICULUM.reduce((a,d) => a + d.topics.length, 0);
  const done  = Object.keys(progress).length;
  const ac    = topic?.domainColor || "#D4A96A";

  const QUICK = [
    "Derive the math from scratch", "Show me Python code", "Geometric intuition",
    "Connect to information theory", "Go deeper on the math", "Why does this actually work?",
    "C++ implementation perspective", "Give me a concrete numerical example",
    "What breaks if we change this?",
  ];

  return (
    <div style={{ width:"100%", minHeight:"100vh", background:"#080808", color:"#E2D9CE", fontFamily:"Palatino Linotype,Palatino,serif", display:"flex", flexDirection:"column" }}>
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
        .qbtn:hover{background:rgba(255,255,255,.07)!important;border-color:#3A3A3A!important;color:#C0B8B0!important}
        .sndbtn:hover:not(:disabled){filter:brightness(1.15)}
        .bbtn:hover{color:#D4A96A!important}
        .resetbtn:hover{color:#C97B7B!important;border-color:#C97B7B44!important}
      `}</style>

      {/* HEADER */}
      <header style={{ borderBottom:"1px solid #131313",padding:"17px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#080808",position:"sticky",top:0,zIndex:200 }}>
        <div style={{ display:"flex",alignItems:"center",gap:14 }}>
          {view==="chat" && (
            <button className="bbtn" onClick={()=>{setView("home");setTopic(null);setMsgs([]);}}
              style={{ background:"none",border:"none",color:"#555",fontSize:22,padding:"0 10px 0 0",fontFamily:"serif",cursor:"pointer",transition:"color .2s" }}>←</button>
          )}
          <div>
            <div style={{ fontSize:9,letterSpacing:4.5,color:"#353535",fontFamily:"'JetBrains Mono',monospace",textTransform:"uppercase" }}>PROFESSOR · AI</div>
            <div style={{ fontSize:17,fontWeight:700,color:"#E2D9CE",letterSpacing:.4 }}>
              {view==="chat"&&topic ? topic.title : "Machine Intelligence"}
            </div>
          </div>
        </div>

        {view==="home" ? (
          <div style={{ display:"flex", alignItems:"center", gap:16 }}>
            {/* Progress bar */}
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:5 }}>
              <div style={{ fontSize:11,color:"#383838",fontFamily:"'JetBrains Mono',monospace" }}>
                <span style={{ color:"#D4A96A" }}>{done}</span>/{total} explored
              </div>
              <div style={{ width:120, height:3, background:"#1A1A1A", borderRadius:2, overflow:"hidden" }}>
                <div style={{ width:`${(done/total)*100}%`, height:"100%", background:"#D4A96A", borderRadius:2, transition:"width .4s ease" }}/>
              </div>
            </div>
            {/* Reset button */}
            {done > 0 && (
              <button className="resetbtn" onClick={resetProgress}
                style={{ background:"none", border:"1px solid #2A2A2A", color:"#3A3A3A", borderRadius:6,
                  padding:"5px 10px", fontSize:9, fontFamily:"'JetBrains Mono',monospace",
                  cursor:"pointer", letterSpacing:1.5, transition:"all .2s" }}>
                RESET
              </button>
            )}
          </div>
        ) : (
          topic && <div style={{ fontSize:9,color:ac,letterSpacing:2.5,fontFamily:"'JetBrains Mono',monospace",textTransform:"uppercase" }}>{topic.domainName}</div>
        )}
      </header>

      {view==="home" ? (
        <div style={{ flex:1,overflowY:"auto" }}>
          {/* Hero */}
          <div style={{ maxWidth:800,margin:"0 auto",padding:"54px 40px 44px" }}>
            <div style={{ fontSize:9,letterSpacing:5,color:"#2E2E2E",fontFamily:"'JetBrains Mono',monospace",marginBottom:20 }}>THE COMPLETE PATH</div>
            <h1 style={{ fontSize:46,fontWeight:400,lineHeight:1.17,margin:"0 0 20px",color:"#E2D9CE" }}>
              From probability axioms<br/><em style={{ color:"#D4A96A" }}>to production transformers.</em>
            </h1>
            <p style={{ color:"#505050",fontSize:15.5,lineHeight:1.9,margin:"0 0 34px",maxWidth:540 }}>
              Not a course. A professor. Click any topic, demand the derivation, push for the code —
              and wait for the moment when latent spaces, backprop and attention all click into one unified picture.
            </p>
            <button onClick={()=>{setTopic(null);setMsgs([]);setView("chat");}}
              style={{ background:"#D4A96A",color:"#080808",border:"none",borderRadius:8,padding:"11px 28px",fontSize:11.5,fontWeight:700,letterSpacing:2,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer" }}>
              OPEN FREE SESSION →
            </button>
          </div>

          {/* Curriculum */}
          <div style={{ maxWidth:800,margin:"0 auto",padding:"0 40px 80px" }}>
            {CURRICULUM.map((domain, di) => (
              <div key={domain.domain} style={{ marginBottom:2,animation:`si .28s ease ${di*.04}s both` }}>
                <div className="dhdr"
                  onClick={()=>setExpanded(expanded===domain.domain?null:domain.domain)}
                  style={{ display:"flex",alignItems:"center",gap:14,padding:"19px 4px 17px",borderBottom:"1px solid #111",transition:"opacity .2s" }}>
                  <span style={{ fontSize:22,color:domain.color,width:32,textAlign:"center",fontFamily:"monospace",flexShrink:0 }}>{domain.glyph}</span>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:10,letterSpacing:3.5,color:domain.color,fontFamily:"'JetBrains Mono',monospace" }}>{domain.domain}</div>
                    <div style={{ fontSize:12,color:"#404040",marginTop:3,fontStyle:"italic" }}>{domain.desc}</div>
                  </div>
                  <div style={{ fontSize:10,color:"#303030",fontFamily:"'JetBrains Mono',monospace",display:"flex",alignItems:"center",gap:10,flexShrink:0 }}>
                    <span style={{ color:domain.topics.some(t=>progress[t.id])?domain.color:"#303030" }}>
                      {domain.topics.filter(t=>progress[t.id]).length}/{domain.topics.length}
                    </span>
                    <span style={{ fontSize:16,transition:"transform .22s",display:"inline-block",transform:expanded===domain.domain?"rotate(90deg)":"none" }}>›</span>
                  </div>
                </div>
                {expanded===domain.domain && (
                  <div style={{ animation:"fi .22s ease" }}>
                    {domain.topics.map((t, ti) => (
                      <div key={t.id} className="trow"
                        onClick={()=>startTopic(t,domain)}
                        style={{ display:"flex",alignItems:"center",gap:14,padding:"14px 8px 14px 46px",borderBottom:"1px solid #0D0D0D",animation:`fi .18s ease ${ti*.03}s both` }}>
                        <div style={{ width:6,height:6,borderRadius:"50%",flexShrink:0,
                          background:progress[t.id]?domain.color:"transparent",
                          border:`1px solid ${progress[t.id]?domain.color:"#282828"}` }}/>
                        <div style={{ flex:1,minWidth:0 }}>
                          <div style={{ fontSize:14.5,color:progress[t.id]?"#E2D9CE":"#9A9490",marginBottom:3 }}>{t.title}</div>
                          <div style={{ fontSize:11.5,color:"#363432",fontStyle:"italic" }}>{t.sub}</div>
                        </div>
                        <span style={{ color:domain.color,fontSize:14,flexShrink:0,opacity:.6 }}>→</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      ) : (
        <div style={{ flex:1,display:"flex",flexDirection:"column",overflow:"hidden" }}>
          {/* Messages */}
          <div style={{ flex:1,overflowY:"auto",padding:"36px 0 20px" }}>
            <div style={{ maxWidth:800,margin:"0 auto",padding:"0 36px" }}>
              {msgs.length===0 && !busy && (
                <div style={{ textAlign:"center",padding:"80px 0",animation:"fi .4s ease" }}>
                  <div style={{ fontSize:54,opacity:.1,marginBottom:18,fontFamily:"monospace",color:ac }}>{topic?.glyph||"∑"}</div>
                  <div style={{ color:"#363432",fontStyle:"italic",fontSize:14 }}>
                    {topic ? `Preparing: ${topic.title}` : "Session open. Ask anything."}
                  </div>
                </div>
              )}
              {msgs.map((m, i) => (
                <div key={i} style={{ marginBottom:38,animation:"fi .3s ease" }}>
                  <div style={{ fontSize:9,letterSpacing:3.5,fontFamily:"'JetBrains Mono',monospace",marginBottom:10,textTransform:"uppercase",color:m.role==="user"?"#484440":ac }}>
                    {m.role==="user"?"YOU":"PROFESSOR"}
                  </div>
                  {m.role==="assistant" ? (
                    <div style={{ paddingLeft:18,borderLeft:"2px solid #181818" }}>
                      <MsgRenderer content={m.content} ready={ready} accent={ac}/>
                    </div>
                  ) : (
                    <div style={{ color:"#7A7470",fontSize:15,lineHeight:1.75 }}>{m.content}</div>
                  )}
                </div>
              ))}
              {busy && (
                <div style={{ animation:"fi .25s ease" }}>
                  <div style={{ fontSize:9,letterSpacing:3.5,fontFamily:"'JetBrains Mono',monospace",marginBottom:8,color:ac }}>PROFESSOR</div>
                  <div style={{ paddingLeft:18,borderLeft:"2px solid #181818" }}>
                    <Dots color={ac}/>
                  </div>
                </div>
              )}
              <div ref={endRef}/>
            </div>
          </div>

          {/* Exercise button */}
          {topic && msgs.length >= 2 && !busy && (
            <div style={{ padding:"0 36px 8px",maxWidth:800,margin:"0 auto",width:"100%" }}>
              <button onClick={getExercises}
                style={{ background:"transparent",border:`1px solid ${ac}44`,color:ac,borderRadius:8,padding:"8px 18px",fontSize:11,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",letterSpacing:1,transition:"all .2s",display:"flex",alignItems:"center",gap:8 }}
                onMouseOver={e=>{e.currentTarget.style.background=`${ac}18`}}
                onMouseOut={e=>{e.currentTarget.style.background="transparent"}}>
                <span style={{ fontSize:14 }}>⊞</span> GENERATE EXERCISES
              </button>
            </div>
          )}

          {/* Quick prompts */}
          {msgs.length>0 && msgs.length<7 && !busy && (
            <div style={{ padding:"0 36px 10px",maxWidth:800,margin:"0 auto",width:"100%" }}>
              <div style={{ display:"flex",gap:7,flexWrap:"wrap" }}>
                {QUICK.map(q => (
                  <button key={q} className="qbtn" onClick={()=>send(q)}
                    style={{ background:"transparent",border:"1px solid #1C1C1C",color:"#484440",borderRadius:20,padding:"6px 14px",fontSize:11,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",transition:"all .15s",letterSpacing:.3 }}>
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div style={{ borderTop:"1px solid #111",padding:"18px 36px 22px",background:"#080808" }}>
            <div style={{ maxWidth:800,margin:"0 auto",display:"flex",gap:12,alignItems:"flex-end" }}>
              <textarea ref={taRef} value={input}
                onChange={e=>setInput(e.target.value)}
                onKeyDown={e=>{ if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send(input);} }}
                onInput={e=>{ e.target.style.height="auto"; e.target.style.height=Math.min(e.target.scrollHeight,180)+"px"; }}
                placeholder="Ask. Demand the derivation. Push for the math, the code, the geometry..."
                style={{ flex:1,background:"#0E0E0E",border:"1px solid #1C1C1C",borderRadius:10,padding:"14px 18px",color:"#E2D9CE",fontSize:14.5,fontFamily:"Palatino Linotype,Palatino,serif",lineHeight:1.65,minHeight:52,transition:"border-color .2s" }}
                onFocus={e=>e.target.style.borderColor="#2A2A2A"}
                onBlur={e=>e.target.style.borderColor="#1C1C1C"}
              />
              <button className="sndbtn" onClick={()=>send(input)} disabled={busy||!input.trim()}
                style={{ background:(!busy&&input.trim())?ac:"#141414",color:(!busy&&input.trim())?"#080808":"#282828",border:"none",borderRadius:10,width:52,height:52,fontSize:20,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s",cursor:busy||!input.trim()?"not-allowed":"pointer" }}>
                →
              </button>
            </div>
            <div style={{ maxWidth:800,margin:"7px auto 0",textAlign:"center",fontSize:9,color:"#1E1E1E",fontFamily:"'JetBrains Mono',monospace",letterSpacing:1 }}>
              ENTER send · SHIFT+ENTER newline
            </div>
          </div>
        </div>
      )}
    </div>
  );
}