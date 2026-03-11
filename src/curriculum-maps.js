// STATIC CURRICULUM MAPS
// All 89 topics with hand-crafted section maps.
// Each section has: id, title, summary

export const CURRICULUM_MAPS = {

  // ─── MATHEMATICAL FOUNDATIONS ───────────────────────────────────────────

  sets: [
    { id:1, title:"What Is a Set? Naive vs Axiomatic",         summary:"Intuition behind collections, why naive set theory breaks, and the need for axioms." },
    { id:2, title:"Set Operations",                            summary:"Union, intersection, difference, complement — definitions, Venn diagrams, and algebraic laws." },
    { id:3, title:"Relations and Their Properties",            summary:"Ordered pairs, Cartesian products, reflexivity, symmetry, transitivity, and equivalence relations." },
    { id:4, title:"Functions: Definition and Types",           summary:"Functions as relations, injections, surjections, bijections, and function composition." },
    { id:5, title:"Cardinality and Countability",              summary:"Finite vs infinite sets, countable vs uncountable, Cantor's diagonal argument." },
    { id:6, title:"Propositional Logic",                       summary:"Propositions, logical connectives, truth tables, tautologies, and contradictions." },
    { id:7, title:"Predicate Logic and Quantifiers",           summary:"Predicates, universal and existential quantifiers, scope, and negation rules." },
    { id:8, title:"Proof Techniques",                          summary:"Direct proof, proof by contradiction, proof by contrapositive, and mathematical induction." },
    { id:9, title:"Sigma-Algebras and Measurable Spaces",      summary:"Why sigma-algebras are needed in probability, Borel sets, and measurability." },
    { id:10, title:"Connections to AI/ML",                     summary:"How set theory underpins probability spaces, feature spaces, hypothesis classes, and VC theory." },
  ],

  prob: [
    { id:1, title:"Experiments, Outcomes, and Sample Spaces",  summary:"Defining random experiments, sample spaces (discrete and continuous), and events as subsets." },
    { id:2, title:"The Kolmogorov Axioms",                     summary:"The three axioms of probability, what they forbid and enforce, and their consequences." },
    { id:3, title:"Computing Probabilities: Counting Methods", summary:"Permutations, combinations, multinomials — when outcomes are equally likely." },
    { id:4, title:"Conditional Probability",                   summary:"Definition of P(A|B), the multiplication rule, and the law of total probability." },
    { id:5, title:"Independence",                              summary:"Formal definition of independence, mutual independence, and common misconceptions." },
    { id:6, title:"Bayes' Theorem",                            summary:"Derivation from conditional probability, prior/likelihood/posterior intuition, classic examples." },
    { id:7, title:"Common Probability Mistakes",               summary:"The Monty Hall problem, prosecutor's fallacy, base rate neglect — and how to avoid them." },
    { id:8, title:"Probability as Measure Theory",             summary:"Connecting Kolmogorov axioms to measure theory, sigma-algebras, and why this matters." },
  ],

  rv: [
    { id:1, title:"What Is a Random Variable?",                summary:"Random variables as functions from sample space to reals — the formal definition." },
    { id:2, title:"Discrete Random Variables and PMFs",        summary:"Probability mass functions, support, and the normalization condition." },
    { id:3, title:"Continuous Random Variables and PDFs",      summary:"Probability density functions, why P(X=x)=0, and integrating to get probabilities." },
    { id:4, title:"Cumulative Distribution Functions",         summary:"CDF definition, properties, relationship to PMF/PDF, and the quantile function." },
    { id:5, title:"Expectation",                               summary:"Expected value for discrete and continuous RVs, linearity of expectation, and LOTUS." },
    { id:6, title:"Variance and Standard Deviation",           summary:"Variance as expected squared deviation, the computational formula, and properties." },
    { id:7, title:"Common Discrete Distributions",             summary:"Bernoulli, Binomial, Geometric, Poisson — derivations and when to use each." },
    { id:8, title:"Common Continuous Distributions",           summary:"Uniform, Exponential, Gaussian — PDFs, means, variances, and their roles in ML." },
    { id:9, title:"Moment Generating Functions",               summary:"MGFs as an alternative characterization of distributions, moments, and uniqueness." },
  ],

  jointprob: [
    { id:1, title:"Joint Distributions (Discrete)",            summary:"Joint PMFs, joint tables, and computing probabilities of combined events." },
    { id:2, title:"Joint Distributions (Continuous)",          summary:"Joint PDFs, integration over regions, and the joint CDF." },
    { id:3, title:"Marginal Distributions",                    summary:"Recovering individual distributions from joint distributions via marginalization." },
    { id:4, title:"Conditional Distributions",                 summary:"Conditional PMFs and PDFs, relationship to joint and marginal, Bayes' theorem in full." },
    { id:5, title:"Independence of Random Variables",          summary:"Formal definition via joint factoring, implications for expectation and variance." },
    { id:6, title:"Covariance and Correlation",                summary:"Covariance as expected product of deviations, correlation coefficient, and their limits." },
    { id:7, title:"The Multivariate Gaussian",                 summary:"Mean vector, covariance matrix, contours, marginals, and conditionals." },
    { id:8, title:"Change of Variables",                       summary:"Transforming random variables — the Jacobian technique and key examples." },
  ],

  linalg1: [
    { id:1, title:"Vectors and Vector Spaces",                 summary:"Formal definition of vector spaces, axioms, examples beyond arrows, and subspaces." },
    { id:2, title:"Linear Combinations, Span, and Basis",      summary:"What it means to span a space, linear independence, and choosing a basis." },
    { id:3, title:"Dimension and Rank",                        summary:"Dimension of a vector space, rank of a matrix, and the rank-nullity theorem." },
    { id:4, title:"Linear Maps and Matrices",                  summary:"Linear transformations as structure-preserving maps, matrix representation, composition." },
    { id:5, title:"Matrix Operations",                         summary:"Addition, scalar multiplication, matrix multiplication — rules and geometric meaning." },
    { id:6, title:"The Four Fundamental Subspaces",            summary:"Column space, null space, row space, left null space — and how they relate." },
    { id:7, title:"Solving Linear Systems",                    summary:"Gaussian elimination, row echelon form, existence and uniqueness of solutions." },
    { id:8, title:"Inner Products and Norms",                  summary:"Dot product, general inner products, vector norms, orthogonality and projection." },
    { id:9, title:"Geometric Interpretations",                 summary:"Rotations, reflections, projections, and shears as linear maps — visualizing transformations." },
  ],

  linalg2: [
    { id:1, title:"Determinants",                              summary:"Definition via cofactor expansion, geometric meaning as volume scaling, properties." },
    { id:2, title:"Eigenvalues and Eigenvectors",              summary:"Definition, characteristic polynomial, geometric and algebraic multiplicity." },
    { id:3, title:"Diagonalization",                           summary:"When a matrix is diagonalizable, change of basis, and powers of matrices." },
    { id:4, title:"Symmetric Matrices and Spectral Theorem",   summary:"Why symmetric matrices have real eigenvalues and orthogonal eigenvectors." },
    { id:5, title:"Singular Value Decomposition (SVD)",        summary:"Full derivation of SVD, singular values, left/right singular vectors, and geometry." },
    { id:6, title:"SVD: Low-Rank Approximation",               summary:"Truncated SVD, the Eckart-Young theorem, and why this is the best approximation." },
    { id:7, title:"Principal Component Analysis from SVD",     summary:"PCA as SVD on centered data, explained variance, and the projection interpretation." },
    { id:8, title:"Cholesky Decomposition",                    summary:"Positive definite matrices, Cholesky factorization, and applications in sampling." },
    { id:9, title:"Matrix Calculus Foundations",               summary:"Derivatives of scalars/vectors/matrices with respect to vectors — the Jacobian and Hessian." },
  ],

  calc: [
    { id:1, title:"Partial Derivatives",                       summary:"Extending derivatives to multiple variables, formal definition, and geometric meaning." },
    { id:2, title:"The Gradient",                              summary:"Gradient as the direction of steepest ascent, its geometric properties, and notation." },
    { id:3, title:"The Jacobian Matrix",                       summary:"Jacobian as the generalization of the derivative for vector-valued functions." },
    { id:4, title:"The Hessian Matrix",                        summary:"Second-order partial derivatives, symmetry, and what the Hessian tells us about curvature." },
    { id:5, title:"The Chain Rule (Multivariate)",             summary:"Chain rule for composed functions, computational graphs, and the path-sum formula." },
    { id:6, title:"Directional Derivatives",                   summary:"Derivative in an arbitrary direction, relationship to the gradient, and the gradient theorem." },
    { id:7, title:"Taylor Expansion in Multiple Variables",    summary:"First and second-order Taylor approximations and their role in optimization." },
    { id:8, title:"Integration in Multiple Variables",         summary:"Double and triple integrals, Fubini's theorem, and change of variables." },
  ],

  opt: [
    { id:1, title:"Optimization Fundamentals",                 summary:"Minimization vs maximization, local vs global optima, and the landscape metaphor." },
    { id:2, title:"Convexity",                                 summary:"Convex sets and functions, the definition, geometric intuition, and why convexity matters." },
    { id:3, title:"First-Order Optimality Conditions",         summary:"Setting the gradient to zero, why this is necessary but not sufficient, critical points." },
    { id:4, title:"Second-Order Conditions",                   summary:"The Hessian test for minima/maxima/saddle points, positive (semi)definiteness." },
    { id:5, title:"Gradient Descent",                         summary:"The gradient descent algorithm, step size, convergence for convex functions." },
    { id:6, title:"Constrained Optimization and Lagrangians",  summary:"Equality constraints, Lagrange multipliers, geometric intuition of the KKT conditions." },
    { id:7, title:"KKT Conditions",                            summary:"Inequality constraints, complementary slackness, and the full KKT system." },
    { id:8, title:"Duality",                                   summary:"Primal and dual problems, weak and strong duality, and Slater's condition." },
    { id:9, title:"Non-Convex Optimization",                   summary:"Saddle points, spurious local minima, and why deep learning still works despite non-convexity." },
  ],

  info: [
    { id:1, title:"Measuring Uncertainty: Shannon Entropy",    summary:"Entropy as a measure of surprise/uncertainty, derivation from desiderata, and bits vs nats." },
    { id:2, title:"Joint and Conditional Entropy",             summary:"Entropy of joint distributions, conditional entropy, and the chain rule for entropy." },
    { id:3, title:"Mutual Information",                        summary:"MI as reduction in uncertainty, relationship to entropy, and its role in feature selection." },
    { id:4, title:"KL Divergence",                             summary:"KL divergence as a measure of distribution difference, asymmetry, and non-negativity proof." },
    { id:5, title:"Cross-Entropy",                             summary:"Cross-entropy as expected surprise, relationship to KL divergence, and use as a loss function." },
    { id:6, title:"The Data Processing Inequality",            summary:"Information can only be lost through processing — implications for ML pipelines." },
    { id:7, title:"Source Coding and Compression",             summary:"Huffman coding, Shannon's source coding theorem, and optimal code length." },
    { id:8, title:"Information Theory in Machine Learning",    summary:"Variational inference, maximum entropy models, and the information bottleneck." },
  ],

  stats: [
    { id:1, title:"Statistical Models and Estimators",         summary:"Parametric models, estimators as functions of data, and the bias-variance-consistency triad." },
    { id:2, title:"Maximum Likelihood Estimation",             summary:"MLE derivation, log-likelihood, and examples for Gaussian, Bernoulli, and Poisson." },
    { id:3, title:"Properties of Estimators",                  summary:"Bias, variance, consistency, efficiency — and the Cramér-Rao lower bound." },
    { id:4, title:"Maximum A Posteriori Estimation",           summary:"MAP as MLE with a prior, connection to regularization, and Laplace vs Gaussian priors." },
    { id:5, title:"The Bias-Variance Tradeoff",                summary:"Decomposing MSE into bias squared plus variance, and the tradeoff in model complexity." },
    { id:6, title:"Confidence Intervals",                      summary:"Frequentist confidence intervals, construction, and correct vs incorrect interpretations." },
    { id:7, title:"Hypothesis Testing",                        summary:"Null/alternative hypotheses, p-values, Type I/II errors, and statistical power." },
    { id:8, title:"The Central Limit Theorem",                 summary:"CLT statement, proof sketch, and why the Gaussian is so ubiquitous in statistics." },
  ],

  bayes_th: [
    { id:1, title:"The Bayesian Worldview",                    summary:"Probability as degree of belief, subjective vs frequentist probability, and the Bayesian update cycle." },
    { id:2, title:"Prior, Likelihood, and Posterior",          summary:"Formal Bayes' theorem, the role of each term, and how to read the equation." },
    { id:3, title:"Conjugate Priors",                          summary:"What conjugacy means, Beta-Binomial and Gaussian-Gaussian examples, and why it's useful." },
    { id:4, title:"Bayesian Inference for the Gaussian",       summary:"Full worked example: inferring the mean of a Gaussian with known variance." },
    { id:5, title:"Predictive Distributions",                  summary:"Prior predictive and posterior predictive — integrating out parameters." },
    { id:6, title:"Bayesian vs Frequentist",                   summary:"Key differences in philosophy, practice, and when each approach is more appropriate." },
    { id:7, title:"Markov Chain Monte Carlo (MCMC) Intuition", summary:"Why exact inference is hard, MCMC as approximate sampling, Metropolis-Hastings idea." },
    { id:8, title:"Variational Inference Intuition",           summary:"Approximating the posterior with a simpler distribution, ELBO, and the mean-field assumption." },
  ],

  nummath: [
    { id:1, title:"Floating Point Representation",             summary:"IEEE 754, mantissa and exponent, machine epsilon, and the limits of floating point." },
    { id:2, title:"Numerical Errors: Roundoff and Truncation", summary:"Sources of error in computation, error propagation, and catastrophic cancellation." },
    { id:3, title:"Condition Numbers",                         summary:"Well-posed vs ill-posed problems, condition number of a matrix, and sensitivity analysis." },
    { id:4, title:"Numerical Differentiation",                 summary:"Finite differences, forward/central differences, and the step size dilemma." },
    { id:5, title:"Numerical Linear Algebra",                  summary:"LU decomposition, numerical stability of Gaussian elimination, and pivoting strategies." },
    { id:6, title:"Iterative Solvers",                         summary:"Jacobi, Gauss-Seidel, conjugate gradient — when direct methods are too expensive." },
    { id:7, title:"Numerical Integration",                     summary:"Quadrature rules, Simpson's rule, Gaussian quadrature, and Monte Carlo integration." },
    { id:8, title:"Stability in Deep Learning",                summary:"Numerical issues in backprop, mixed precision training, gradient scaling, and loss spikes." },
  ],

  // ─── CLASSICAL MACHINE LEARNING ─────────────────────────────────────────

  ml_frame: [
    { id:1, title:"What Is Learning?",                         summary:"Informal definition of learning from data, the three components: task, experience, performance." },
    { id:2, title:"The Formal Learning Problem",               summary:"Input space, output space, hypothesis class, loss function, and the empirical risk." },
    { id:3, title:"Generalization",                            summary:"Training error vs test error, overfitting, underfitting, and the generalization gap." },
    { id:4, title:"PAC Learning",                              summary:"Probably Approximately Correct framework, sample complexity, and what it guarantees." },
    { id:5, title:"VC Dimension",                              summary:"Shattering, VC dimension of common hypothesis classes, and the fundamental theorem of ML." },
    { id:6, title:"Bias-Variance Decomposition",               summary:"Formal bias-variance-noise decomposition of expected test error." },
    { id:7, title:"The No Free Lunch Theorem",                 summary:"No algorithm beats random search on all problems — what this means in practice." },
    { id:8, title:"Inductive Biases",                          summary:"What assumptions are baked into each algorithm, and why they matter for generalization." },
  ],

  data_prep: [
    { id:1, title:"Data Types and Distributions",              summary:"Continuous, categorical, ordinal, text, image — each requires different treatment." },
    { id:2, title:"Exploratory Data Analysis",                 summary:"Summary statistics, histograms, scatter plots, correlation matrices — systematic EDA." },
    { id:3, title:"Missing Data",                              summary:"MCAR, MAR, MNAR — types of missingness, imputation strategies, and when to drop." },
    { id:4, title:"Outlier Detection and Treatment",           summary:"Statistical and visual detection methods, when outliers are signal vs noise." },
    { id:5, title:"Normalization and Standardization",         summary:"Min-max scaling, z-score standardization, when each is appropriate." },
    { id:6, title:"Encoding Categorical Variables",            summary:"One-hot encoding, ordinal encoding, target encoding, and embedding lookup tables." },
    { id:7, title:"Feature Engineering",                       summary:"Creating new features, polynomial features, interaction terms, domain knowledge." },
    { id:8, title:"Data Leakage",                              summary:"How leakage happens, examples in feature engineering and preprocessing, and prevention." },
    { id:9, title:"Train/Validation/Test Splits",              summary:"Proper splitting strategies, temporal splits, stratification, and the test set sacred rule." },
  ],

  linreg: [
    { id:1, title:"The Linear Model",                          summary:"Hypothesis function, parameters, and the geometric view of a hyperplane in feature space." },
    { id:2, title:"Loss Function: Mean Squared Error",         summary:"MSE derivation from maximum likelihood under Gaussian noise assumption." },
    { id:3, title:"Ordinary Least Squares: Geometric View",    summary:"Projection of the target onto the column space of X, the normal equations." },
    { id:4, title:"OLS: Closed-Form Solution",                 summary:"Deriving the normal equations, the pseudoinverse, and when the solution exists." },
    { id:5, title:"Properties of OLS Estimators",             summary:"Gauss-Markov theorem, unbiasedness, and the variance of the OLS estimator." },
    { id:6, title:"Ridge Regression",                          summary:"L2 regularization as a Gaussian prior on weights, shrinkage effect, and the bias-variance tradeoff." },
    { id:7, title:"Lasso Regression",                          summary:"L1 regularization as a Laplace prior, sparsity-inducing geometry, and coordinate descent." },
    { id:8, title:"Polynomial and Basis Function Regression",  summary:"Non-linear regression via feature maps, the bias-variance tradeoff in basis complexity." },
  ],

  logistic: [
    { id:1, title:"From Regression to Classification",         summary:"Why linear regression fails for binary outcomes, the need for a bounded output." },
    { id:2, title:"The Sigmoid Function",                      summary:"Sigmoid as a squashing function, its derivative, and probabilistic interpretation." },
    { id:3, title:"The Logistic Model",                        summary:"Log-odds interpretation, decision boundary, and multi-class extension." },
    { id:4, title:"Cross-Entropy Loss from MLE",               summary:"Deriving the cross-entropy loss as the negative log-likelihood of the Bernoulli model." },
    { id:5, title:"Gradient Descent for Logistic Regression",  summary:"Computing the gradient of cross-entropy, the update rule, and convergence." },
    { id:6, title:"Regularization in Logistic Regression",     summary:"L1/L2 regularization, their effect on decision boundaries, and MAP interpretation." },
    { id:7, title:"Generalized Linear Models",                 summary:"The exponential family, link functions, and logistic regression as a special case." },
    { id:8, title:"Softmax and Multi-Class Classification",    summary:"Softmax as a generalization of sigmoid, categorical cross-entropy, and the one-vs-rest alternative." },
  ],

  svm: [
    { id:1, title:"The Maximum Margin Classifier",             summary:"Intuition for margin maximization, support vectors, and the decision boundary." },
    { id:2, title:"Hard-Margin SVM Formulation",               summary:"The constrained optimization problem, the primal form, and its geometric meaning." },
    { id:3, title:"Lagrangian Duality for SVM",                summary:"Primal to dual conversion, the role of support vectors, and KKT conditions." },
    { id:4, title:"Soft-Margin SVM",                           summary:"Slack variables for non-separable data, the C parameter, and its effect on the boundary." },
    { id:5, title:"The Kernel Trick",                          summary:"Feature maps, inner products in high dimensions, and computing without explicit expansion." },
    { id:6, title:"Mercer's Theorem and Valid Kernels",        summary:"Conditions for a function to be a valid kernel, RKHS, and common kernel functions." },
    { id:7, title:"Training SVMs: SMO Algorithm",              summary:"Sequential minimal optimization, working set selection, and practical training." },
    { id:8, title:"SVMs vs Neural Networks",                   summary:"When SVMs win, when they lose, and their relationship to one-layer neural networks." },
  ],

  trees: [
    { id:1, title:"Decision Trees: The Idea",                  summary:"Recursive partitioning of feature space, axis-aligned splits, and the tree structure." },
    { id:2, title:"Impurity Measures: Entropy and Gini",       summary:"Information gain, Gini impurity — derivations, comparison, and intuition." },
    { id:3, title:"The CART Algorithm",                        summary:"Greedy split selection, building the full tree, and the time complexity." },
    { id:4, title:"Regression Trees",                          summary:"Predicting continuous values, MSE as the splitting criterion, and leaf predictions." },
    { id:5, title:"Overfitting and Pruning",                   summary:"Why deep trees overfit, cost-complexity pruning, and the alpha parameter." },
    { id:6, title:"Missing Values and Categorical Features",   summary:"Surrogate splits, handling categories natively, and why trees are robust." },
    { id:7, title:"Instability of Single Trees",               summary:"High variance of single trees, the motivation for ensemble methods." },
  ],

  ensemble: [
    { id:1, title:"The Wisdom of Crowds: Bias and Variance",   summary:"Why combining models helps, variance reduction via averaging, and the ensemble insight." },
    { id:2, title:"Bagging",                                   summary:"Bootstrap aggregating, out-of-bag error estimation, and the variance reduction proof." },
    { id:3, title:"Random Forests",                            summary:"Feature subsampling on top of bagging, decorrelating trees, and feature importance." },
    { id:4, title:"AdaBoost",                                  summary:"Sequential reweighting of misclassified examples, weak learners, and the exponential loss." },
    { id:5, title:"Gradient Boosting: The Framework",          summary:"Boosting as functional gradient descent, fitting residuals, and the additive model." },
    { id:6, title:"Gradient Boosted Trees (GBDT)",             summary:"Trees as base learners, the gradient boosting algorithm step by step." },
    { id:7, title:"XGBoost: The Engineering",                  summary:"Second-order approximation, regularized objective, column subsampling, and speed tricks." },
    { id:8, title:"Stacking and Blending",                     summary:"Meta-learning, training a blender on out-of-fold predictions, and practical considerations." },
  ],

  kernels: [
    { id:1, title:"Feature Maps and Kernels",                  summary:"Lifting data to higher dimensions, the inner product shortcut, and the kernel function." },
    { id:2, title:"Reproducing Kernel Hilbert Spaces",         summary:"RKHS as the natural space of kernel methods, the representer theorem." },
    { id:3, title:"Common Kernel Functions",                   summary:"Linear, polynomial, RBF, Matérn — properties, hyperparameters, and use cases." },
    { id:4, title:"Kernel Ridge Regression",                   summary:"Ridge regression in the RKHS, the dual form, and the kernel trick applied." },
    { id:5, title:"Gaussian Processes: The Prior",             summary:"GP as a distribution over functions, mean function, covariance kernel, and sample paths." },
    { id:6, title:"GP Regression: Posterior and Predictions",  summary:"Conditioning a GP on data, the posterior mean and variance, and closed-form inference." },
    { id:7, title:"GP Hyperparameter Learning",                summary:"Marginal likelihood maximization, length scale, noise variance, and ARD." },
    { id:8, title:"Scalable Kernel Methods",                   summary:"Nyström approximation, random Fourier features, and sparse GPs for large datasets." },
  ],

  dimred: [
    { id:1, title:"The Curse of Dimensionality",               summary:"Volume of high-dimensional spaces, data sparsity, and distance concentration." },
    { id:2, title:"The Manifold Hypothesis",                   summary:"Real data lies on low-dimensional manifolds, and why this justifies dimensionality reduction." },
    { id:3, title:"PCA from First Principles",                 summary:"Variance maximization derivation, connection to eigenvectors of the covariance matrix." },
    { id:4, title:"PCA via SVD",                               summary:"SVD derivation of PCA, explained variance ratio, choosing the number of components." },
    { id:5, title:"Kernel PCA",                                summary:"Non-linear dimensionality reduction, kernelizing PCA, and the feature space view." },
    { id:6, title:"t-SNE",                                     summary:"Perplexity, heavy-tailed similarity in low dimensions, and the attractive/repulsive forces." },
    { id:7, title:"UMAP",                                      summary:"Topological data analysis intuition, fuzzy simplicial sets, and how UMAP differs from t-SNE." },
    { id:8, title:"When to Use Which Method",                  summary:"PCA vs t-SNE vs UMAP — tradeoffs, interpretability, and practical guidance." },
  ],

  cluster: [
    { id:1, title:"What Is Clustering?",                       summary:"Unsupervised structure finding, what makes a good cluster, and the ill-defined nature of the problem." },
    { id:2, title:"K-Means: Lloyd's Algorithm",                summary:"The K-means objective, Lloyd's algorithm, convergence, and sensitivity to initialization." },
    { id:3, title:"K-Means++",                                 summary:"Smarter initialization, the D² seeding procedure, and its approximation guarantee." },
    { id:4, title:"Gaussian Mixture Models",                   summary:"GMMs as soft K-means, the generative model, and maximum likelihood formulation." },
    { id:5, title:"EM Algorithm for GMMs",                     summary:"E-step and M-step full derivation, convergence to local maxima, and connection to K-means." },
    { id:6, title:"DBSCAN",                                    summary:"Density-based clustering, core/border/noise points, epsilon and min_samples, and advantages." },
    { id:7, title:"Hierarchical Clustering",                   summary:"Agglomerative clustering, linkage criteria, dendrograms, and cutting the tree." },
    { id:8, title:"Evaluating Clustering",                     summary:"Silhouette score, Davies-Bouldin index, and the limits of internal evaluation metrics." },
  ],

  eval: [
    { id:1, title:"Training, Validation, and Test Sets",       summary:"The three-way split, why each exists, and the cardinal rule of the test set." },
    { id:2, title:"Cross-Validation",                          summary:"K-fold CV, leave-one-out, stratified CV, and computational tradeoffs." },
    { id:3, title:"Classification Metrics",                    summary:"Accuracy, precision, recall, F1, and when each is the right metric." },
    { id:4, title:"The Confusion Matrix",                      summary:"TP/FP/TN/FN, class imbalance problems, and reading confusion matrices." },
    { id:5, title:"ROC Curves and AUC",                        summary:"ROC as threshold sweep, AUC as rank ordering quality, and its probabilistic interpretation." },
    { id:6, title:"Precision-Recall Curves",                   summary:"When ROC is misleading with class imbalance, PR curves as the alternative." },
    { id:7, title:"Calibration",                               summary:"Probability calibration, reliability diagrams, Platt scaling, and isotonic regression." },
    { id:8, title:"Statistical Tests for Model Comparison",    summary:"McNemar's test, paired t-test, and Bayesian model comparison — knowing if differences are real." },
  ],

  // ─── NEURAL NETWORKS: FIRST PRINCIPLES ──────────────────────────────────

  perceptron: [
    { id:1, title:"The Biological Neuron and Its Abstraction",  summary:"From biology to computation: the McCulloch-Pitts neuron and its mathematical form." },
    { id:2, title:"The Perceptron Model",                       summary:"Weights, bias, linear threshold activation, and the decision boundary it computes." },
    { id:3, title:"The Perceptron Learning Algorithm",          summary:"Online update rule, convergence theorem, and what convergence requires." },
    { id:4, title:"The XOR Problem and Its Lesson",             summary:"Why single-layer perceptrons fail on XOR, linear separability, and the need for depth." },
    { id:5, title:"Multi-Layer Perceptrons",                    summary:"Hidden layers, composition of non-linearities, and the representational power of depth." },
    { id:6, title:"Universal Approximation Theorem",            summary:"Statement of the UAT, proof sketch, and what it says (and doesn't say) about learning." },
    { id:7, title:"Depth vs Width",                             summary:"Exponential advantage of depth, why deeper networks are more parameter-efficient." },
  ],

  forwardprop: [
    { id:1, title:"The Computational Graph",                    summary:"Representing computations as directed acyclic graphs, nodes, edges, and intermediate values." },
    { id:2, title:"Layer-by-Layer Forward Pass",                summary:"Tracking activations through the network, matrix-vector notation, and shapes." },
    { id:3, title:"Activation Functions in Forward Pass",       summary:"How activations transform intermediate representations, the role of non-linearity." },
    { id:4, title:"Batch Forward Pass",                         summary:"Vectorizing over a mini-batch, the (batch, features) tensor convention." },
    { id:5, title:"Implementing Forward Pass in NumPy",         summary:"Building a 2-layer MLP from scratch, tracking shapes, and verifying outputs." },
    { id:6, title:"The Role of Initialization",                 summary:"Why all-zero initialization breaks, and the need for symmetry breaking." },
  ],

  backprop: [
    { id:1, title:"The Chain Rule, Revisited",                  summary:"Chain rule for scalar, vector, and matrix functions — the backbone of backprop." },
    { id:2, title:"Backprop on a Computational Graph",          summary:"Reverse-mode differentiation, upstream gradient, local gradient, and the delta rule." },
    { id:3, title:"Backprop Through a Linear Layer",            summary:"Deriving dL/dW, dL/db, dL/dx for a fully connected layer step by step." },
    { id:4, title:"Backprop Through Activations",               summary:"Gradients through sigmoid, ReLU, tanh — element-wise operations and their derivatives." },
    { id:5, title:"Backprop Through Softmax + Cross-Entropy",   summary:"The beautiful simplification when softmax and cross-entropy are combined." },
    { id:6, title:"Full Backprop: End-to-End Example",          summary:"Complete forward and backward pass through a 2-layer MLP with concrete numbers." },
    { id:7, title:"Implementing Backprop in NumPy",             summary:"Building a working neural network with manual gradients — matching autograd output." },
    { id:8, title:"Gradient Checking",                          summary:"Numerical gradient verification, the epsilon trick, and debugging your implementation." },
  ],

  autograd: [
    { id:1, title:"The Need for Automatic Differentiation",     summary:"Why symbolic diff and numerical diff are insufficient for large-scale ML." },
    { id:2, title:"Forward Mode AD",                            summary:"Dual numbers, computing directional derivatives, and when forward mode is efficient." },
    { id:3, title:"Reverse Mode AD",                            summary:"Reverse mode as backprop, the tape abstraction, and its computational advantage." },
    { id:4, title:"The Tape/Wengert List",                      summary:"How frameworks record computations, the trace, and replay for gradient computation." },
    { id:5, title:"Building a Scalar Autograd Engine",          summary:"Implementing a Value class with backward, topo sort, and a working backward pass." },
    { id:6, title:"Autograd in PyTorch",                        summary:"Tensors, requires_grad, backward(), grad, retain_graph — the PyTorch AD model." },
    { id:7, title:"Custom Autograd Functions",                  summary:"Writing custom forward/backward in PyTorch, when and why this is needed." },
  ],

  activations: [
    { id:1, title:"Why Non-Linearity?",                         summary:"Without activations all layers collapse to one, the necessity of non-linear functions." },
    { id:2, title:"Sigmoid and Tanh",                           summary:"Formulas, derivatives, saturation, and the vanishing gradient problem they cause." },
    { id:3, title:"ReLU",                                       summary:"The rectified linear unit, dying ReLU problem, and why it works despite non-differentiability." },
    { id:4, title:"Leaky ReLU and PReLU",                       summary:"Fixing dying ReLU, learned slope, and when they outperform ReLU." },
    { id:5, title:"ELU and SELU",                               summary:"Smooth negative part, self-normalizing networks, and when SELU is self-contained." },
    { id:6, title:"GELU",                                       summary:"Gaussian error linear unit, stochastic interpretation, and its use in transformers." },
    { id:7, title:"Swish and Mish",                             summary:"Smooth ReLU variants, their empirical properties, and NAS-discovered activations." },
    { id:8, title:"Choosing an Activation",                     summary:"Practical guidance: ReLU as default, GELU for transformers, and when to experiment." },
  ],

  loss: [
    { id:1, title:"What Is a Loss Function?",                   summary:"Loss as a measure of fit, the connection to MLE, and the choice of loss as an inductive bias." },
    { id:2, title:"Mean Squared Error",                         summary:"MSE for regression, its probabilistic derivation, sensitivity to outliers." },
    { id:3, title:"Mean Absolute Error and Huber Loss",         summary:"Robustness to outliers, non-differentiability of MAE, and the Huber compromise." },
    { id:4, title:"Cross-Entropy Loss",                         summary:"Binary and categorical cross-entropy, MLE derivation, and the KL divergence connection." },
    { id:5, title:"Focal Loss",                                 summary:"Addressing class imbalance, down-weighting easy examples, and the gamma parameter." },
    { id:6, title:"Contrastive and Triplet Loss",               summary:"Learning metric spaces, anchor/positive/negative, and margin-based objectives." },
    { id:7, title:"Loss Geometry",                              summary:"Loss landscapes, sharp vs flat minima, and implications for generalization." },
  ],

  optimizers: [
    { id:1, title:"Gradient Descent Variants",                  summary:"Batch, stochastic, and mini-batch gradient descent — tradeoffs and intuition." },
    { id:2, title:"The Learning Rate",                          summary:"Too large vs too small, the learning rate as the most important hyperparameter." },
    { id:3, title:"Momentum",                                   summary:"Physical analogy, exponential moving average of gradients, and the dampening effect." },
    { id:4, title:"Nesterov Momentum",                          summary:"Look-ahead gradient, the correction that makes momentum faster and more accurate." },
    { id:5, title:"AdaGrad",                                    summary:"Adaptive learning rates, accumulating squared gradients, and the sparse gradient benefit." },
    { id:6, title:"RMSProp",                                    summary:"Fixing AdaGrad's monotonic decay, exponential moving average of squared gradients." },
    { id:7, title:"Adam",                                       summary:"First and second moment estimates, bias correction, and the full Adam derivation." },
    { id:8, title:"AdamW and Weight Decay",                     summary:"L2 regularization vs weight decay, why they differ in Adam, and AdamW as the fix." },
    { id:9, title:"Learning Rate Schedules",                    summary:"Step decay, cosine annealing, warmup, and cyclical learning rates." },
  ],

  init: [
    { id:1, title:"Why Initialization Matters",                 summary:"Symmetry breaking, vanishing/exploding signals at initialization, and the scale problem." },
    { id:2, title:"Zero and Random Initialization",             summary:"Why zeros fail, naive Gaussian init, and the variance problem at depth." },
    { id:3, title:"Xavier / Glorot Initialization",             summary:"Variance preservation through linear layers, the fan-in/fan-out formula, and its derivation." },
    { id:4, title:"Kaiming / He Initialization",                summary:"Correcting Xavier for ReLU, the factor of 2, and derivation via signal propagation." },
    { id:5, title:"Orthogonal Initialization",                  summary:"Orthogonal weight matrices, isometry, and benefits for deep networks." },
    { id:6, title:"Signal Propagation Analysis",                summary:"Mean field theory of deep networks, ordered/chaotic phases, and the edge of chaos." },
  ],

  regularize: [
    { id:1, title:"Overfitting and the Bias-Variance Tradeoff", summary:"The core problem regularization solves, model complexity, and the double descent phenomenon." },
    { id:2, title:"L1 and L2 Regularization",                  summary:"Weight penalties, their geometric interpretations, and Bayesian prior equivalents." },
    { id:3, title:"Dropout",                                    summary:"Random neuron masking, the ensemble interpretation, and the inverted dropout trick." },
    { id:4, title:"MC Dropout",                                 summary:"Dropout at test time as approximate Bayesian inference and uncertainty estimation." },
    { id:5, title:"Batch Normalization",                        summary:"Normalizing activations, learnable scale/shift, internal covariate shift reduction." },
    { id:6, title:"Gradient Flow Through BatchNorm",            summary:"Backprop through BatchNorm, the moving statistics at test time, and training instabilities." },
    { id:7, title:"Layer Norm and Group Norm",                  summary:"BatchNorm alternatives for small batches, sequence models, and their formulas." },
    { id:8, title:"Data Augmentation as Regularization",        summary:"Augmentation as implicit regularization, common strategies, and MixUp/CutOut." },
  ],

  vanishing: [
    { id:1, title:"The Vanishing Gradient Problem",             summary:"Gradients shrinking exponentially with depth, mathematical analysis with sigmoids." },
    { id:2, title:"The Exploding Gradient Problem",             summary:"Gradients growing exponentially, norm explosion, and instability in training." },
    { id:3, title:"Gradient Clipping",                         summary:"Norm clipping vs value clipping, the clipping threshold, and stabilizing RNN training." },
    { id:4, title:"Residual Connections",                       summary:"Skip connections, the identity shortcut, and why they let gradients flow freely." },
    { id:5, title:"ResNets: The Architecture",                  summary:"Full ResNet design, bottleneck blocks, and why depth suddenly became trainable." },
    { id:6, title:"Highway Networks and Dense Connections",     summary:"Gated skip connections, DenseNet, and the full spectrum of connectivity patterns." },
    { id:7, title:"Normalization as a Gradient Fix",            summary:"How BatchNorm and LayerNorm indirectly address vanishing/exploding gradients." },
  ],

  // ─── LATENT SPACES & REPRESENTATIONS ────────────────────────────────────

  repr: [
    { id:1, title:"What Is a Representation?",                  summary:"Features as learned abstractions, the hierarchy of representations in deep nets." },
    { id:2, title:"The Manifold Hypothesis Revisited",          summary:"High-dimensional data on low-dimensional manifolds, and what this means for learning." },
    { id:3, title:"Distributed Representations",               summary:"Combinatorial generalization, superposition, and why distributed is better than local." },
    { id:4, title:"Disentanglement",                           summary:"Separating independent factors of variation, what disentangled means, and metrics." },
    { id:5, title:"Probing and Interpreting Representations",   summary:"Linear probing, representational similarity analysis, and what networks actually learn." },
    { id:6, title:"Transfer Learning",                         summary:"Representations that generalize across tasks, fine-tuning, and feature freezing." },
  ],

  embeddings: [
    { id:1, title:"The Word Representation Problem",            summary:"One-hot vectors, their failure modes, and the motivation for dense embeddings." },
    { id:2, title:"The Distributional Hypothesis",             summary:"Words that appear in similar contexts have similar meanings — the foundation of word2vec." },
    { id:3, title:"Word2Vec: Skip-Gram Model",                  summary:"Predicting context words from center word, the objective function, and training." },
    { id:4, title:"Word2Vec: CBOW Model",                       summary:"Predicting center word from context, and comparison with skip-gram." },
    { id:5, title:"Negative Sampling",                         summary:"Making training tractable, the noise contrastive estimation connection, and k selection." },
    { id:6, title:"Properties of Learned Embeddings",          summary:"Analogy structure, semantic clustering, and what the geometry captures." },
    { id:7, title:"GloVe and FastText",                         summary:"Global co-occurrence statistics (GloVe), subword embeddings (FastText), and comparison." },
  ],

  embed_geo: [
    { id:1, title:"Geometry of Embedding Spaces",              summary:"Distance metrics in embedding spaces, norm distributions, and angular vs Euclidean similarity." },
    { id:2, title:"Linear Structure and Analogies",            summary:"king - man + woman = queen: why linear arithmetic works and what it requires." },
    { id:3, title:"Isotropy and Anisotropy",                   summary:"Uniformly spread vs cone-concentrated embeddings, and why anisotropy hurts performance." },
    { id:4, title:"Hubness Problem",                           summary:"Hubs in high dimensions, why some points become universal nearest neighbors." },
    { id:5, title:"Embedding Alignment",                       summary:"Aligning embedding spaces across languages or modalities, Procrustes alignment." },
    { id:6, title:"Contextual vs Static Embeddings",           summary:"Word2Vec as static, ELMo/BERT as contextual — the fundamental difference." },
  ],

  autoenc: [
    { id:1, title:"Autoencoders: The Idea",                    summary:"Encoder-decoder architecture, the information bottleneck, and reconstruction loss." },
    { id:2, title:"Undercomplete Autoencoders",                summary:"Forcing compression, PCA as a linear autoencoder, and the learned basis." },
    { id:3, title:"Overcomplete and Sparse Autoencoders",      summary:"More hidden units than inputs, sparsity constraints, and dictionary learning." },
    { id:4, title:"Denoising Autoencoders",                    summary:"Adding noise to inputs, learning to reconstruct clean data, and robustness." },
    { id:5, title:"Contractive Autoencoders",                  summary:"Penalizing the Frobenius norm of the Jacobian, and tangent space regularization." },
    { id:6, title:"Autoencoders for Anomaly Detection",        summary:"High reconstruction error = anomaly, thresholding, and real-world applications." },
  ],

  vae: [
    { id:1, title:"Limitations of Deterministic Autoencoders", summary:"Holes in the latent space, discontinuity, and why we need a probabilistic model." },
    { id:2, title:"The Variational Autoencoder Generative Model",summary:"Latent variable model, prior on z, decoder as likelihood, and the inference problem." },
    { id:3, title:"Variational Inference and the ELBO",        summary:"Intractable posterior, variational family, and the Evidence Lower BOund derivation." },
    { id:4, title:"The Reparameterization Trick",              summary:"Why sampling blocks gradients, the epsilon trick, and enabling backprop through sampling." },
    { id:5, title:"The VAE Objective: Reconstruction + KL",    summary:"Two-term loss interpretation: reconstruction quality vs posterior regularization." },
    { id:6, title:"The VAE Latent Space",                      summary:"Continuity, interpolation, sampling from the prior, and latent traversals." },
    { id:7, title:"Posterior Collapse",                        summary:"When the encoder ignores the input, KL annealing, and free bits as solutions." },
    { id:8, title:"Beta-VAE and Disentanglement",              summary:"Upweighting KL for disentanglement, the beta hyperparameter, and tradeoffs." },
  ],

  gan: [
    { id:1, title:"The GAN Framework",                         summary:"Generator vs discriminator, the minimax game, and the training alternation." },
    { id:2, title:"GAN Objective: The JS Divergence",          summary:"Optimal discriminator derivation, the generator minimizing JS divergence." },
    { id:3, title:"GAN Training Dynamics",                     summary:"Nash equilibrium, mode collapse, training instability, and the gradient vanishing problem." },
    { id:4, title:"DCGAN",                                     summary:"Convolutional GANs, architectural guidelines, batch norm in GANs, and image generation." },
    { id:5, title:"Wasserstein GAN",                           summary:"Earth mover distance, the critic, weight clipping, and why WGAN is more stable." },
    { id:6, title:"WGAN-GP",                                   summary:"Gradient penalty as an alternative to clipping, the 1-Lipschitz constraint." },
    { id:7, title:"Conditional GANs",                          summary:"Class-conditional generation, cGAN, and the projection discriminator." },
    { id:8, title:"Spectral Normalization",                    summary:"Enforcing Lipschitz via spectral norm, singular value control, and training stability." },
  ],

  diffusion: [
    { id:1, title:"The Diffusion Idea",                        summary:"Gradually destroying structure with noise, then learning to reverse the process." },
    { id:2, title:"The Forward (Noising) Process",             summary:"Markov chain adding Gaussian noise, the closed-form sampling at any timestep." },
    { id:3, title:"The Reverse (Denoising) Process",           summary:"Learning to reverse diffusion, the parameterization of the reverse Markov chain." },
    { id:4, title:"The DDPM Training Objective",               summary:"Simplifying the ELBO to a noise prediction objective, the connection to score matching." },
    { id:5, title:"Score Matching and Score-Based Models",     summary:"Score as gradient of log density, denoising score matching, and the connection to DDPM." },
    { id:6, title:"DDIM Sampling",                             summary:"Deterministic sampling from DDPM, accelerated inference, and the continuous limit." },
    { id:7, title:"Classifier and Classifier-Free Guidance",   summary:"Conditional generation, the guidance scale, and trading diversity for quality." },
    { id:8, title:"Latent Diffusion Models",                   summary:"Diffusion in a compressed latent space, the VAE encoder, and Stable Diffusion." },
  ],

  contrastive: [
    { id:1, title:"Self-Supervised Learning: The Premise",     summary:"Learning from data without labels, pretext tasks, and the pretraining-finetuning paradigm." },
    { id:2, title:"Contrastive Learning: The Idea",            summary:"Pulling positives together, pushing negatives apart, and the metric learning connection." },
    { id:3, title:"InfoNCE Loss",                              summary:"Deriving InfoNCE as a lower bound on mutual information, the temperature parameter." },
    { id:4, title:"SimCLR",                                    summary:"Data augmentation pairs, the projection head, large batch requirement, and results." },
    { id:5, title:"MoCo",                                      summary:"Momentum encoder, the queue as a memory bank, and decoupling batch size from negatives." },
    { id:6, title:"BYOL and Non-Contrastive Methods",          summary:"No negative samples, the EMA target network, and why collapse doesn't happen." },
    { id:7, title:"Representation Collapse",                   summary:"What it is, why it happens, and how different methods prevent it." },
    { id:8, title:"SSL for Non-Image Modalities",              summary:"Contrastive learning for text, audio, graphs, and time series." },
  ],

  clip: [
    { id:1, title:"The Multimodal Problem",                    summary:"Connecting vision and language, the semantic gap, and the promise of joint embeddings." },
    { id:2, title:"CLIP Architecture",                         summary:"Image encoder (ViT/ResNet) + text encoder (Transformer), independent encoders." },
    { id:3, title:"CLIP Training Objective",                   summary:"Contrastive loss over (image, text) pairs, the N×N similarity matrix." },
    { id:4, title:"The WebImageText Dataset",                  summary:"400M image-text pairs from the internet, data curation, and scale as the key ingredient." },
    { id:5, title:"Zero-Shot Transfer",                        summary:"Classification without labels via text prompts, prompt engineering, and linear probes." },
    { id:6, title:"CLIP Limitations and Biases",              summary:"Compositional reasoning failures, spurious correlations, and social biases." },
    { id:7, title:"CLIP as a Foundation for Generation",       summary:"DALL-E, Stable Diffusion — using CLIP embeddings as a conditioning signal." },
  ],

  latent_nav: [
    { id:1, title:"Interpolation in Latent Space",             summary:"Linear vs spherical interpolation, smooth traversal between data points." },
    { id:2, title:"Latent Space Arithmetic",                   summary:"Adding and subtracting attributes, style mixing, and the linear structure assumption." },
    { id:3, title:"Disentanglement Metrics",                   summary:"MIG, DCI, and beta-VAE score — measuring how disentangled a representation is." },
    { id:4, title:"Latent Space Editing",                      summary:"Finding edit directions, StyleGAN latent editing, and semantic face manipulation." },
    { id:5, title:"Latent Space Inversion",                    summary:"Projecting real data into a learned latent space, optimization vs encoder-based inversion." },
    { id:6, title:"Sanity and Quality Checks",                 summary:"FID, IS, precision/recall for generative models — measuring quality and diversity." },
  ],

  // ─── ATTENTION & TRANSFORMERS ────────────────────────────────────────────

  rnn_lstm: [
    { id:1, title:"Sequential Data and the Need for Memory",   summary:"Why feedforward networks fail for sequences, the concept of a hidden state." },
    { id:2, title:"The Vanilla RNN",                           summary:"Recurrence relation, parameter sharing, and the computational graph unrolled in time." },
    { id:3, title:"Backprop Through Time (BPTT)",              summary:"Unrolling the graph, gradients flowing backward through time, and truncated BPTT." },
    { id:4, title:"Vanishing Gradients in RNNs",               summary:"Why long-term dependencies fail, mathematical analysis, and why this motivated LSTMs." },
    { id:5, title:"LSTM: The Architecture",                    summary:"Forget gate, input gate, output gate, cell state — the full LSTM equations." },
    { id:6, title:"LSTM: Why It Works",                        summary:"The cell state highway, constant error carousels, and gradient flow analysis." },
    { id:7, title:"GRU",                                       summary:"Simplified gating with reset and update gates, comparison with LSTM." },
    { id:8, title:"Limitations of RNNs",                       summary:"Sequential computation, lack of parallelism, and the fixed-size bottleneck." },
  ],

  attn_idea: [
    { id:1, title:"The Encoder-Decoder Bottleneck",            summary:"Compressing variable-length input into a fixed vector, information loss problem." },
    { id:2, title:"Bahdanau Attention",                        summary:"The alignment model, context vector as weighted sum of encoder states, and the score function." },
    { id:3, title:"Attention as Soft Retrieval",               summary:"Query-key matching, soft selection vs hard, and the information retrieval analogy." },
    { id:4, title:"Luong Attention",                           summary:"Dot-product and general attention, differences from Bahdanau, and global vs local." },
    { id:5, title:"Attention Visualization",                   summary:"Alignment matrices, what they reveal, and interpreting attention in translation." },
    { id:6, title:"The Step Toward Self-Attention",            summary:"Why attending to the same sequence is valuable, coreference, and long-range structure." },
  ],

  selfattn: [
    { id:1, title:"The Query-Key-Value Framework",             summary:"Q, K, V as projections of the same sequence, and the retrieval metaphor." },
    { id:2, title:"Scaled Dot-Product Attention",              summary:"Computing attention scores, why we divide by sqrt(d_k), and the softmax." },
    { id:3, title:"Full Self-Attention Derivation",            summary:"From x to Q,K,V via learned projections, to attention weights, to output." },
    { id:4, title:"The Attention Matrix",                      summary:"Properties of the (seq_len × seq_len) matrix, what it computes, and what it captures." },
    { id:5, title:"Causal (Masked) Self-Attention",            summary:"Masking future tokens, the upper triangular mask, and why this enables autoregression." },
    { id:6, title:"Complexity Analysis",                       summary:"O(n²d) time and memory, the quadratic bottleneck, and why this matters at scale." },
    { id:7, title:"Cross-Attention",                           summary:"Queries from one sequence, keys and values from another — bridging encoder and decoder." },
  ],

  multihead: [
    { id:1, title:"The Limitation of Single-Head Attention",   summary:"A single head can only attend to one type of relationship at a time." },
    { id:2, title:"Multi-Head Attention",                      summary:"H parallel attention heads, separate Q/K/V projections, concatenation and final projection." },
    { id:3, title:"What Each Head Learns",                     summary:"Different heads attend to syntax, coreference, position — empirical analysis." },
    { id:4, title:"Parameter Count Analysis",                  summary:"Counting parameters in multi-head attention, the effect of d_model and h." },
    { id:5, title:"Efficient Multi-Head Implementations",      summary:"Batching heads as a single matrix multiply, the reshape trick, and grouped query attention." },
  ],

  posenc: [
    { id:1, title:"The Permutation Invariance Problem",        summary:"Self-attention is order-agnostic — why this is a problem and what we need to add." },
    { id:2, title:"Sinusoidal Positional Encoding",            summary:"The original sinusoidal PE, derivation, properties, and generalization to unseen lengths." },
    { id:3, title:"Learned Positional Embeddings",             summary:"Treating positions as learnable parameters, tradeoffs vs sinusoidal." },
    { id:4, title:"Relative Positional Encodings",             summary:"Encoding distance between tokens rather than absolute position, T5 bias." },
    { id:5, title:"Rotary Position Embedding (RoPE)",          summary:"Rotating Q and K vectors by position angle, relative position via rotation, used in LLaMA." },
    { id:6, title:"ALiBi",                                     summary:"Attention with linear biases, no position embeddings, and extrapolation to longer sequences." },
  ],

  transformer: [
    { id:1, title:"The Transformer: Overview",                 summary:"The full encoder-decoder architecture, the flow of information, and the paper's contribution." },
    { id:2, title:"The Encoder Block",                         summary:"Multi-head self-attention + FFN, residual connections, layer norm, and the block structure." },
    { id:3, title:"The Feed-Forward Network",                  summary:"Two linear layers with ReLU/GELU, the expansion ratio, and what the FFN computes." },
    { id:4, title:"The Decoder Block",                         summary:"Masked self-attention + cross-attention + FFN, the auto-regressive constraint." },
    { id:5, title:"Pre-LN vs Post-LN",                         summary:"Layer norm placement, gradient flow differences, and why Pre-LN is now standard." },
    { id:6, title:"The Residual Stream View",                  summary:"Interpreting the transformer as additive updates to a shared residual stream." },
    { id:7, title:"Attention is All You Need: Key Insights",   summary:"What made the original paper transformative, and what it got wrong." },
  ],

  gpt: [
    { id:1, title:"Autoregressive Language Modeling",          summary:"Predicting the next token, chain rule of probability, and the training objective." },
    { id:2, title:"Tokenization",                              summary:"BPE, WordPiece, SentencePiece — how text becomes tokens, vocabulary size tradeoffs." },
    { id:3, title:"GPT Architecture",                          summary:"Decoder-only transformer, causal masking, and the embedding + positional + blocks structure." },
    { id:4, title:"Perplexity",                                summary:"Perplexity as exponentiated cross-entropy, measuring language model quality." },
    { id:5, title:"Sampling Strategies",                       summary:"Greedy, beam search, top-k, top-p (nucleus), temperature — tradeoffs in generation." },
    { id:6, title:"GPT Scaling: GPT-1 to GPT-4",              summary:"How GPT evolved, what changed at each scale, and emergent capabilities." },
    { id:7, title:"In-Context Learning",                       summary:"Zero/few-shot prompting, why it works, and the debate about what ICL really does." },
  ],

  bert: [
    { id:1, title:"Bidirectional Representations",             summary:"Why bidirectionality matters for understanding, vs left-to-right for generation." },
    { id:2, title:"Masked Language Modeling",                  summary:"The MLM objective, 15% masking strategy, and what BERT learns." },
    { id:3, title:"Next Sentence Prediction",                  summary:"NSP objective, its role, and why later work found it unhelpful." },
    { id:4, title:"BERT Architecture",                         summary:"Encoder-only transformer, [CLS] and [SEP] tokens, and the segment embeddings." },
    { id:5, title:"Fine-Tuning BERT",                          summary:"Adding a task head, fine-tuning all parameters, and the standard classification setup." },
    { id:6, title:"Contextual Embeddings",                     summary:"How BERT embeddings differ from word2vec — context dependence and polysemy." },
    { id:7, title:"BERT Variants",                             summary:"RoBERTa, ALBERT, DistilBERT — what each improved and why." },
  ],

  scaling: [
    { id:1, title:"The Scaling Hypothesis",                    summary:"Performance improves predictably with compute, data, and parameters — the core idea." },
    { id:2, title:"Neural Scaling Laws",                       summary:"Power law relationships, the Kaplan et al. findings, and what the exponents mean." },
    { id:3, title:"The Chinchilla Paper",                      summary:"Compute-optimal training, the 20 tokens/parameter rule, and recalibrating scale." },
    { id:4, title:"Emergent Abilities",                        summary:"Capabilities that appear suddenly at scale, the debate on whether emergence is real." },
    { id:5, title:"Phase Transitions in Learning",             summary:"Grokking, double descent, and sudden generalization as training phenomena." },
    { id:6, title:"Implications for Research",                 summary:"What scaling laws mean for architecture search, data curation, and training decisions." },
  ],

  finetune: [
    { id:1, title:"Full Fine-Tuning",                          summary:"Updating all parameters on a downstream task, data requirements, and catastrophic forgetting." },
    { id:2, title:"Feature Extraction and Linear Probing",     summary:"Freezing the backbone, training only the head, and when this is sufficient." },
    { id:3, title:"Adapter Layers",                            summary:"Small bottleneck modules inserted into transformer blocks, the adapter training setup." },
    { id:4, title:"Prefix Tuning",                             summary:"Prepending trainable vectors to the key/value sequence, the continuous prompt idea." },
    { id:5, title:"LoRA",                                      summary:"Low-rank decomposition of weight updates, the math, rank choice, and merging at inference." },
    { id:6, title:"QLoRA",                                     summary:"Quantized base model + LoRA, 4-bit NF4 quantization, and fine-tuning large models on one GPU." },
    { id:7, title:"Instruction Fine-Tuning",                   summary:"Supervised fine-tuning on (instruction, response) pairs, formatting, and chat templates." },
  ],

  inference: [
    { id:1, title:"The KV Cache",                              summary:"Caching key and value tensors during autoregressive generation, the memory tradeoff." },
    { id:2, title:"Attention Complexity",                      summary:"O(n²) in sequence length, memory wall, and why long context is expensive." },
    { id:3, title:"FlashAttention",                            summary:"IO-aware attention, tiling to stay in SRAM, fused kernel, and the speed/memory gains." },
    { id:4, title:"FlashAttention-2 and Beyond",               summary:"Further parallelization, work partitioning, and the hardware utilization gains." },
    { id:5, title:"Speculative Decoding",                      summary:"Draft model + verification, the acceptance criterion, and the speedup analysis." },
    { id:6, title:"Quantization for Inference",                summary:"INT8/INT4 inference, GPTQ, and AWQ — making LLMs fit on smaller hardware." },
    { id:7, title:"Continuous Batching",                       summary:"Iteration-level scheduling, PagedAttention, and how vLLM achieves high throughput." },
  ],

  // ─── ADVANCED AI FRONTIERS ───────────────────────────────────────────────

  rl_found: [
    { id:1, title:"The RL Framework",                          summary:"Agent, environment, state, action, reward — the Markov Decision Process setup." },
    { id:2, title:"Markov Decision Processes",                 summary:"Formal MDP definition, the Markov property, and the transition/reward model." },
    { id:3, title:"Policies and Value Functions",              summary:"Deterministic vs stochastic policies, state-value and action-value functions." },
    { id:4, title:"The Bellman Equations",                     summary:"Recursive definitions of V and Q, Bellman expectation and optimality equations." },
    { id:5, title:"Dynamic Programming",                       summary:"Policy evaluation, policy iteration, value iteration — exact DP methods." },
    { id:6, title:"Model-Based vs Model-Free",                 summary:"When you know the MDP vs when you don't, and the tradeoffs between approaches." },
    { id:7, title:"Exploration vs Exploitation",               summary:"The dilemma, epsilon-greedy, UCB, Thompson sampling, and the multi-armed bandit." },
  ],

  drl: [
    { id:1, title:"The Need for Function Approximation",       summary:"Tabular methods don't scale, neural networks as value function approximators." },
    { id:2, title:"Deep Q-Networks (DQN)",                     summary:"Q-learning with neural nets, the instability problem, and the two fixes: replay + target network." },
    { id:3, title:"Policy Gradient Methods",                   summary:"Optimizing the policy directly, the policy gradient theorem, and REINFORCE." },
    { id:4, title:"The Variance Problem in PG",                summary:"High variance of Monte Carlo returns, baselines, and the advantage function." },
    { id:5, title:"Actor-Critic Methods",                      summary:"Combining value estimation and policy optimization, the actor-critic architecture." },
    { id:6, title:"Proximal Policy Optimization (PPO)",        summary:"Clipped surrogate objective, the trust region intuition, and why PPO is the standard." },
    { id:7, title:"Practical Deep RL",                         summary:"Reward shaping, normalization, parallel environments, and the debugging nightmare of RL." },
  ],

  rlhf: [
    { id:1, title:"The Alignment Problem",                     summary:"What we want vs what we can specify — the misalignment between reward and intent." },
    { id:2, title:"Supervised Fine-Tuning",                    summary:"Starting from a pretrained LLM, fine-tuning on demonstration data." },
    { id:3, title:"Reward Modeling",                           summary:"Training a reward model from human preference comparisons, the Bradley-Terry model." },
    { id:4, title:"PPO for Language Models",                   summary:"Applying PPO with the reward model, KL penalty from the reference model." },
    { id:5, title:"Direct Preference Optimization (DPO)",      summary:"Bypassing RL entirely, the DPO derivation, and why it's simpler than PPO." },
    { id:6, title:"Constitutional AI",                         summary:"AI feedback instead of human feedback, the critique-revision loop, and Anthropic's approach." },
    { id:7, title:"RLHF Failure Modes",                        summary:"Reward hacking, sycophancy, and the Goodhart's law of alignment." },
  ],

  gnn: [
    { id:1, title:"Graphs as Data",                            summary:"Nodes, edges, features, adjacency matrix — and why standard NNs can't handle graphs." },
    { id:2, title:"The Message Passing Framework",             summary:"Aggregate-combine paradigm, the general GNN update rule, and iterations." },
    { id:3, title:"Graph Convolutional Networks (GCN)",        summary:"Spectral convolution, the Kipf-Welling simplification, and the normalized adjacency." },
    { id:4, title:"Graph Attention Networks (GAT)",            summary:"Attention-weighted aggregation, multi-head attention on graphs, and dynamic structure." },
    { id:5, title:"Graph SAGE",                                summary:"Inductive learning, neighborhood sampling, and scaling to large graphs." },
    { id:6, title:"Expressive Power of GNNs",                  summary:"The WL test, 1-WL equivalence of standard GNNs, and higher-order GNNs." },
    { id:7, title:"Applications",                              summary:"Molecular property prediction, social networks, knowledge graphs, and recommendation." },
  ],

  moe: [
    { id:1, title:"The MoE Idea: Conditional Computation",     summary:"Not all parameters are needed for every input — routing to specialized experts." },
    { id:2, title:"The Mixture of Experts Layer",              summary:"Gating network, expert networks, top-k routing, and the sparsity advantage." },
    { id:3, title:"Load Balancing",                            summary:"Expert collapse, the auxiliary load balancing loss, and keeping experts utilized." },
    { id:4, title:"Switch Transformer",                        summary:"Top-1 routing, the communication overhead, and scaling to trillion parameters." },
    { id:5, title:"Mixtral",                                   summary:"Top-2 routing, the sliding window attention combination, and open-source MoE." },
    { id:6, title:"MoE Training Challenges",                   summary:"Instability, dead experts, and the engineering complexity of distributed MoE." },
  ],

  ssm: [
    { id:1, title:"State Space Models: The Idea",              summary:"Linear dynamical systems, the state equation, and modeling sequences via hidden state." },
    { id:2, title:"Discretization",                            summary:"From continuous to discrete SSMs, zero-order hold, and the bilinear transform." },
    { id:3, title:"S4: Structured State Spaces",               summary:"HiPPO initialization, diagonal plus low-rank structure, and efficient convolution." },
    { id:4, title:"The Convolutional View of SSMs",            summary:"SSMs as long convolutions, precomputing the kernel, and the efficiency gain." },
    { id:5, title:"Selective SSMs",                            summary:"Input-dependent parameters — the key innovation that makes Mamba selective." },
    { id:6, title:"Mamba Architecture",                        summary:"Hardware-aware parallel scan, the selective scan algorithm, and the Mamba block." },
    { id:7, title:"SSMs vs Transformers",                      summary:"Linear vs quadratic complexity, quality comparison, and where each wins." },
  ],

  multimodal: [
    { id:1, title:"The Multimodal Learning Problem",           summary:"Different modalities have different structures — the alignment and fusion challenge." },
    { id:2, title:"Vision Transformers (ViT)",                 summary:"Patch embeddings, the (image as sequence) idea, and scaling vision with transformers." },
    { id:3, title:"Cross-Modal Attention",                     summary:"Attending from one modality to another, the cross-attention mechanism in multimodal models." },
    { id:4, title:"DALL-E and Text-to-Image",                  summary:"Discrete VAE tokens for images, transformer over image+text, and the dVAE." },
    { id:5, title:"Flamingo",                                  summary:"Few-shot multimodal learning, cross-attention into vision features, and the gated mechanism." },
    { id:6, title:"LLaVA and Visual Instruction Tuning",       summary:"Projecting vision features into LLM space, instruction tuning for multimodal chat." },
    { id:7, title:"Unified Multimodal Models",                 summary:"Models handling all modalities in one architecture — the path to universal models." },
  ],

  causal: [
    { id:1, title:"Correlation Is Not Causation",              summary:"Why predictive ML is not causal, spurious correlations, and the OOD failure mode." },
    { id:2, title:"Causal Graphs and DAGs",                    summary:"Representing causal assumptions as directed acyclic graphs, d-separation." },
    { id:3, title:"The Do-Calculus",                           summary:"Interventions vs observations, do(X=x), and the fundamental distinction in causality." },
    { id:4, title:"Confounders and Backdoor Paths",            summary:"Confounders, the backdoor criterion, and controlling for confounding." },
    { id:5, title:"Counterfactuals",                           summary:"What would have happened — counterfactual reasoning, the structural causal model." },
    { id:6, title:"Instrumental Variables",                    summary:"Estimating causal effects without full backdoor adjustment, IV conditions." },
    { id:7, title:"Causal Inference in ML",                    summary:"IDA, causal representation learning, and why causal thinking improves robustness." },
  ],

  agents: [
    { id:1, title:"LLMs as Reasoning Engines",                 summary:"Chain-of-thought prompting, scratchpads, and why step-by-step reasoning helps." },
    { id:2, title:"Tool Use",                                  summary:"Function calling, JSON schemas, parsing model outputs into tool invocations." },
    { id:3, title:"The ReAct Framework",                       summary:"Interleaving reasoning and acting, the thought-action-observation loop." },
    { id:4, title:"Planning",                                  summary:"Task decomposition, Tree of Thought, LLM-as-planner, and when planning fails." },
    { id:5, title:"Memory in Agents",                          summary:"In-context, external (retrieval), episodic, and parametric memory types." },
    { id:6, title:"RAG: Retrieval-Augmented Generation",       summary:"Retrieval from a knowledge base, embedding-based search, and the augmented context." },
    { id:7, title:"Multi-Agent Systems",                       summary:"Agent roles, communication protocols, orchestration, and emergent coordination." },
    { id:8, title:"Agent Failure Modes",                       summary:"Hallucination in tool calls, error propagation, and the challenge of long-horizon tasks." },
  ],

  // ─── PYTHON & IMPLEMENTATION ─────────────────────────────────────────────

  numpy: [
    { id:1, title:"NumPy Arrays: The N-Dimensional Array",     summary:"ndarray, dtypes, shape, strides, and the C/Fortran memory layout." },
    { id:2, title:"Array Creation and Manipulation",           summary:"zeros, ones, arange, linspace, reshape, transpose, and concatenate." },
    { id:3, title:"Broadcasting Rules",                        summary:"How NumPy handles differently shaped arrays, the rules, and common pitfalls." },
    { id:4, title:"Vectorization and Avoiding Loops",          summary:"Why Python loops are slow, universal functions, and replacing loops with array ops." },
    { id:5, title:"Einsum",                                    summary:"The Einstein summation convention, einsum notation, and rewriting any tensor op." },
    { id:6, title:"Linear Algebra in NumPy",                   summary:"np.linalg: matmul, inv, eig, svd, solve — and when to use each." },
    { id:7, title:"Random Number Generation",                  summary:"np.random, seeding, sampling distributions, and the new Generator API." },
    { id:8, title:"Performance: Strides and Memory",           summary:"Views vs copies, in-place ops, memory layout, and profiling NumPy code." },
  ],

  autograd_b: [
    { id:1, title:"The Micrograd Architecture",                summary:"Karpathy's micrograd: the Value class, data/grad fields, and the backward function." },
    { id:2, title:"Implementing + and *",                      summary:"Forward pass, local gradients, and the backward pass for basic operations." },
    { id:3, title:"Implementing exp, log, tanh",               summary:"More operations, their derivatives, and building the activation function library." },
    { id:4, title:"Topological Sort for Backward",             summary:"Why we need topo sort, the DFS algorithm, and the correct backward order." },
    { id:5, title:"Building a Neuron and Layer",               summary:"Composing Value objects into neurons, layers, and an MLP class." },
    { id:6, title:"Training on a Toy Dataset",                 summary:"Forward, backward, zero_grad, update — the full training loop in micrograd." },
    { id:7, title:"Extending to Tensors",                      summary:"From scalars to arrays, vectorizing operations, and the path to a real autograd." },
  ],

  pytorch: [
    { id:1, title:"PyTorch Tensors",                           summary:"Creating tensors, dtypes, devices (CPU/GPU), and the relationship to NumPy." },
    { id:2, title:"Autograd in PyTorch",                       summary:"requires_grad, the computation graph, backward(), and .grad." },
    { id:3, title:"nn.Module",                                 summary:"The base class for all models, parameters, buffers, and the module hierarchy." },
    { id:4, title:"Building Models with nn.Sequential",        summary:"Stacking layers, forward pass, and inspecting parameter counts." },
    { id:5, title:"Optimizers and the Training Loop",          summary:"optim.SGD/Adam, zero_grad, loss.backward, step — the canonical PyTorch loop." },
    { id:6, title:"DataLoader and Dataset",                    summary:"Custom Dataset class, batching, shuffling, and parallel data loading." },
    { id:7, title:"Hooks and Gradient Inspection",             summary:"Forward/backward hooks, inspecting activations, and debugging training." },
    { id:8, title:"torch.compile and Performance",             summary:"Eager vs compiled mode, graph capture, and the speedup from compilation." },
  ],

  build_nn: [
    { id:1, title:"Project Spec: MNIST Classifier",            summary:"The goal: train a 2-layer MLP on MNIST from scratch using only NumPy." },
    { id:2, title:"Data Loading and Preprocessing",            summary:"Loading MNIST, normalization, one-hot encoding, and batching without PyTorch." },
    { id:3, title:"Forward Pass Implementation",               summary:"Linear layer, ReLU, softmax — implementing each with explicit matrix ops." },
    { id:4, title:"Loss: Cross-Entropy from Scratch",          summary:"Implementing numerically stable cross-entropy, the log-sum-exp trick." },
    { id:5, title:"Backward Pass Implementation",              summary:"Computing all gradients manually, the backward pass for each layer." },
    { id:6, title:"Training Loop and Optimization",            summary:"Mini-batch SGD, learning rate, and the train/eval loop." },
    { id:7, title:"Debugging Gradient Flow",                   summary:"Gradient checking, activation statistics, and diagnosing training problems." },
    { id:8, title:"Reaching 97%+ Accuracy",                    summary:"Hyperparameter tuning, deeper networks, and what it takes to match the baseline." },
  ],

  build_tf: [
    { id:1, title:"Project Spec: Character-Level Language Model", summary:"Train a GPT-like transformer on text using only PyTorch primitives." },
    { id:2, title:"Tokenization and Data Preparation",         summary:"Character-level tokenization, the train/val split, and the batch sampler." },
    { id:3, title:"Implementing Self-Attention from Scratch",  summary:"Q,K,V projections, scaled dot-product, causal mask — no nn.MultiheadAttention." },
    { id:4, title:"The Transformer Block",                     summary:"Multi-head attention + FFN + residuals + LayerNorm, assembling the full block." },
    { id:5, title:"The Full GPT Model",                        summary:"Embedding + positional encoding + blocks + output head — the complete model." },
    { id:6, title:"Training the Model",                        summary:"Cross-entropy loss, AdamW, gradient clipping, and the training loop." },
    { id:7, title:"Text Generation",                           summary:"Autoregressive sampling, temperature, top-k sampling implementation." },
    { id:8, title:"Analysis: What Did It Learn?",              summary:"Inspecting attention patterns, probing embeddings, and understanding the model." },
  ],

  build_vae: [
    { id:1, title:"Project Spec: VAE on MNIST",                summary:"Build a VAE that learns a 2D latent space of MNIST digits." },
    { id:2, title:"Encoder Architecture",                      summary:"CNN or MLP encoder mapping images to mu and log_var vectors." },
    { id:3, title:"Reparameterization Trick in Code",          summary:"Sampling z = mu + eps * std, the detach and randn_like implementation." },
    { id:4, title:"Decoder Architecture",                      summary:"Mapping z back to image space, the Bernoulli or Gaussian output distribution." },
    { id:5, title:"ELBO Loss Implementation",                  summary:"Reconstruction loss + KL divergence term, the beta weighting." },
    { id:6, title:"Training and Monitoring",                   summary:"Logging ELBO, reconstruction loss, KL separately, and watching for posterior collapse." },
    { id:7, title:"Latent Space Visualization",                summary:"Plotting the 2D latent space, seeing digit clusters, and interpolation." },
  ],

  build_rl: [
    { id:1, title:"Project Spec: CartPole with Policy Gradients", summary:"Train an agent to balance a pole using REINFORCE." },
    { id:2, title:"OpenAI Gym Interface",                      summary:"env.reset, env.step, the observation and action spaces, and the episode loop." },
    { id:3, title:"Policy Network",                            summary:"A small MLP that takes state and outputs action probabilities." },
    { id:4, title:"The REINFORCE Algorithm",                   summary:"Collecting rollouts, computing returns, and the policy gradient update." },
    { id:5, title:"Baseline Subtraction",                      summary:"Reducing variance with a baseline, implementing a simple value function baseline." },
    { id:6, title:"Training Loop",                             summary:"Episode collection, gradient computation, update, and convergence monitoring." },
    { id:7, title:"Extending to PPO",                          summary:"Implementing the clipped objective, the advantage estimation, and PPO mini-batches." },
  ],

  train_eng: [
    { id:1, title:"The Training Loop Architecture",            summary:"Epochs, batches, gradient accumulation, and the canonical PyTorch loop." },
    { id:2, title:"Mixed Precision Training",                  summary:"FP16/BF16, dynamic loss scaling, GradScaler, and the memory/speed tradeoff." },
    { id:3, title:"Gradient Clipping",                         summary:"Why to clip, clip_grad_norm_, and setting the threshold." },
    { id:4, title:"Checkpointing",                             summary:"Saving model state, optimizer state, scheduling state, and resuming correctly." },
    { id:5, title:"Experiment Logging",                        summary:"Weights & Biases, TensorBoard — what to log and how often." },
    { id:6, title:"Learning Rate Finder",                      summary:"The LR range test, the loss vs LR plot, and picking the right learning rate." },
    { id:7, title:"Profiling and Bottleneck Finding",          summary:"torch.profiler, GPU utilization, data loading bottlenecks, and optimization." },
  ],

  debug_ml: [
    { id:1, title:"Loss Not Decreasing",                       summary:"Systematic debugging: learning rate, batch size, data pipeline, and architecture issues." },
    { id:2, title:"NaN Gradients",                             summary:"Causes of NaN: division by zero, log(0), overflow — and how to track them down." },
    { id:3, title:"Overfitting Diagnosis",                     summary:"Train/val curves, when to add regularization, and the capacity-data tradeoff." },
    { id:4, title:"Underfitting Diagnosis",                    summary:"When to increase capacity, reduce regularization, and add data augmentation." },
    { id:5, title:"Activation Statistics",                     summary:"Dead ReLUs, saturated sigmoids, monitoring mean/std of activations per layer." },
    { id:6, title:"Gradient Flow Visualization",               summary:"Monitoring gradient norms per layer, identifying vanishing/exploding gradients." },
    { id:7, title:"Systematic Debugging Strategy",             summary:"Start simple, overfit one batch, scale up — the principled debugging workflow." },
  ],

  // ─── C++ & SYSTEMS FOR ML ────────────────────────────────────────────────

  cpp_why: [
    { id:1, title:"Why Performance Matters in ML",             summary:"The compute cost of training, inference latency, and the 1000x gap between Python and C++." },
    { id:2, title:"C++ Memory Model",                          summary:"Stack vs heap, RAII, smart pointers, and memory layout for cache efficiency." },
    { id:3, title:"Cache Efficiency",                          summary:"Cache hierarchy, cache lines, spatial/temporal locality, and cache-friendly data structures." },
    { id:4, title:"SIMD Vectorization",                        summary:"SSE/AVX intrinsics, auto-vectorization, and loop patterns that enable vectorization." },
    { id:5, title:"Zero-Cost Abstractions",                    summary:"Templates, inline functions, constexpr — C++ features with no runtime overhead." },
    { id:6, title:"Profiling C++ Code",                        summary:"perf, valgrind, Intel VTune — finding bottlenecks in ML inference code." },
  ],

  cpp_nn: [
    { id:1, title:"Eigen Library Basics",                      summary:"Matrix and vector types, operations, the expression template system." },
    { id:2, title:"Efficient Matrix Operations with Eigen",    summary:"Block operations, lazy evaluation, aligned memory, and BLAS integration." },
    { id:3, title:"Building a Layer in C++",                   summary:"Struct-based design, forward pass, parameter storage, and the computation." },
    { id:4, title:"Building an MLP in C++",                    summary:"Composing layers, the forward pass, and computing the output." },
    { id:5, title:"Backprop in C++",                           summary:"Implementing the backward pass manually, gradient storage, and memory efficiency." },
    { id:6, title:"Training on MNIST in C++",                  summary:"Data loading, the training loop, and comparing performance to Python." },
  ],

  cuda_intro: [
    { id:1, title:"GPU Architecture",                          summary:"SMs, CUDA cores, warp size, memory hierarchy — how GPUs are built." },
    { id:2, title:"CUDA Execution Model",                      summary:"Grids, blocks, threads — the three levels of parallelism and thread indexing." },
    { id:3, title:"Memory Spaces",                             summary:"Global, shared, local, constant memory — bandwidth, latency, and when to use each." },
    { id:4, title:"Your First CUDA Kernel",                    summary:"Writing a vector addition kernel, __global__, dim3, and the launch syntax." },
    { id:5, title:"Thread Synchronization",                    summary:"__syncthreads(), race conditions, and the critical section problem." },
    { id:6, title:"Bandwidth vs Compute Bound",                summary:"Arithmetic intensity, the roofline model, and diagnosing bottlenecks." },
  ],

  cuda_kern: [
    { id:1, title:"Tiling for Matrix Multiplication",          summary:"The tiled GEMM algorithm, shared memory as a scratchpad, and the speedup." },
    { id:2, title:"Reduction Kernels",                         summary:"Parallel reduction, tree reduction, warp shuffle instructions." },
    { id:3, title:"Writing a Softmax Kernel",                  summary:"Numerically stable softmax, online softmax, and fusing operations." },
    { id:4, title:"Writing an Attention Kernel",               summary:"Naive attention in CUDA, the memory bottleneck, and tiling strategies." },
    { id:5, title:"FlashAttention Implementation Insights",    summary:"The tiled algorithm, SRAM management, and the recomputation trick in backward." },
    { id:6, title:"Kernel Profiling with Nsight",              summary:"Using NVIDIA Nsight to profile occupancy, memory transactions, and instruction throughput." },
  ],

  customop: [
    { id:1, title:"ATen Operations",                           summary:"The ATen tensor library, dispatcher, and how PyTorch operations are structured." },
    { id:2, title:"C++ Extension Basics",                      summary:"setup.py with CUDAExtension, building and loading a C++ extension." },
    { id:3, title:"pybind11 Bindings",                         summary:"Exposing C++ functions to Python, type conversions, and the binding syntax." },
    { id:4, title:"Custom Autograd in C++",                    summary:"Implementing a custom Function with forward and backward in C++." },
    { id:5, title:"CUDA Custom Op",                            summary:"Writing a CUDA kernel and exposing it as a PyTorch operation." },
    { id:6, title:"Testing and Gradient Checking",             summary:"Verifying correctness with gradcheck, numerical gradients, and edge cases." },
  ],

  quantize: [
    { id:1, title:"Why Quantization?",                         summary:"Memory and compute costs of FP32, the case for INT8/INT4 inference." },
    { id:2, title:"Quantization Basics",                       summary:"Symmetric vs asymmetric quantization, scale and zero point, and rounding error." },
    { id:3, title:"Post-Training Quantization (PTQ)",          summary:"Calibration data, per-tensor vs per-channel, and accuracy recovery." },
    { id:4, title:"Quantization-Aware Training (QAT)",         summary:"Fake quantization during training, straight-through estimator, and the accuracy benefit." },
    { id:5, title:"GPTQ",                                      summary:"Layer-wise quantization for LLMs, the OBQ framework, and weight compression." },
    { id:6, title:"Structured Pruning",                        summary:"Removing channels or attention heads, structured vs unstructured sparsity." },
    { id:7, title:"Knowledge Distillation",                    summary:"Teacher-student training, soft targets, and distillation loss components." },
  ],

  infer_eng: [
    { id:1, title:"The Inference Stack",                       summary:"From model weights to predictions: the software and hardware stack." },
    { id:2, title:"ONNX",                                      summary:"Open Neural Network Exchange format, exporting from PyTorch, and the runtime." },
    { id:3, title:"TensorRT",                                  summary:"NVIDIA TensorRT, layer fusion, kernel auto-tuning, and FP16/INT8 engines." },
    { id:4, title:"Operator Fusion",                           summary:"Fusing adjacent ops to reduce memory bandwidth, common fusion patterns." },
    { id:5, title:"OpenAI Triton",                             summary:"Python-like GPU kernel language, tile programming, and when Triton beats CUDA." },
    { id:6, title:"Serving Infrastructure",                    summary:"ONNX Runtime, Triton Inference Server, and production deployment patterns." },
  ],

  llmcpp: [
    { id:1, title:"The llama.cpp Project",                     summary:"Running LLMs on CPUs and consumer GPUs, the philosophy, and the architecture." },
    { id:2, title:"GGUF Format",                               summary:"The tensor serialization format, metadata, and quantization levels in GGUF." },
    { id:3, title:"Memory Mapping",                            summary:"mmap for model weights, lazy loading, and the performance implications." },
    { id:4, title:"CPU GEMM Optimization",                     summary:"SIMD kernels for matrix multiply, AVX2/NEON, and the quantized GEMM." },
    { id:5, title:"KV Cache Management",                       summary:"The KV cache in llama.cpp, context length management, and memory pools." },
    { id:6, title:"Speculative Decoding in llama.cpp",         summary:"Draft model integration, verification, and the speedup in practice." },
  ],

  // ─── MLOPS & FULL PIPELINES ──────────────────────────────────────────────

  ml_design: [
    { id:1, title:"Requirements and Success Metrics",          summary:"Translating business goals into ML objectives, SLOs, and the metrics that matter." },
    { id:2, title:"Data Flywheel",                             summary:"Feedback loops where deployment generates training data, and designing for it." },
    { id:3, title:"Train/Serve Skew",                         summary:"Why training and serving distributions differ, and how to detect and fix it." },
    { id:4, title:"Scaling Considerations",                    summary:"Throughput, latency, cost — the ML system design triangle." },
    { id:5, title:"System Architecture Patterns",             summary:"Batch vs real-time inference, two-tower models, and common ML architecture patterns." },
    { id:6, title:"ML System Design Interview Framework",      summary:"A structured approach to ML design questions, common pitfalls, and evaluation." },
  ],

  experiment: [
    { id:1, title:"Why Reproducibility Is Hard",               summary:"Randomness, environment differences, and the reproducibility crisis in ML." },
    { id:2, title:"Tracking with Weights & Biases",            summary:"Logging metrics, hyperparameters, artifacts, and comparing runs in W&B." },
    { id:3, title:"MLflow",                                    summary:"The MLflow ecosystem: tracking, projects, models, and registry." },
    { id:4, title:"DVC: Data Version Control",                 summary:"Versioning datasets and models alongside code, the DVC pipeline." },
    { id:5, title:"Configuration Management",                  summary:"Hydra, YAML configs, reproducible hyperparameter management." },
    { id:6, title:"Seeding Everything",                        summary:"Python, NumPy, PyTorch, CUDA seeds — making runs truly reproducible." },
  ],

  features: [
    { id:1, title:"The Feature Store Concept",                 summary:"Centralized repository of features, reuse across teams, and the online/offline split." },
    { id:2, title:"Feast",                                     summary:"Open-source feature store, feature definitions, materialization, and serving." },
    { id:3, title:"Point-in-Time Joins",                       summary:"Training data correctness, avoiding future leakage via correct temporal joins." },
    { id:4, title:"Streaming Features",                        summary:"Real-time feature computation, Kafka/Flink pipelines, and the complexity." },
    { id:5, title:"Batch Feature Pipelines",                   summary:"Spark/dbt for feature computation, scheduling, and dependency management." },
    { id:6, title:"Data Validation with Great Expectations",   summary:"Schema validation, distribution tests, and automatic data quality checks." },
  ],

  dist_train: [
    { id:1, title:"Why Distributed Training?",                 summary:"Model too large for one GPU, training too slow, and the parallelism strategies." },
    { id:2, title:"Data Parallelism",                          summary:"Each GPU has a full model copy, gradient synchronization, and the all-reduce operation." },
    { id:3, title:"PyTorch DDP",                               summary:"DistributedDataParallel, the NCCL backend, and gradient bucketing." },
    { id:4, title:"ZeRO and FSDP",                             summary:"ZeRO stages 1/2/3, sharding optimizer state/gradients/parameters, and FSDP in PyTorch." },
    { id:5, title:"Pipeline Parallelism",                      summary:"Splitting layers across GPUs, micro-batches, and the pipeline bubble." },
    { id:6, title:"Tensor Parallelism",                        summary:"Splitting individual layers across GPUs, Megatron-style column/row parallelism." },
    { id:7, title:"3D Parallelism",                            summary:"Combining data, pipeline, and tensor parallelism for trillion-parameter models." },
  ],

  serving: [
    { id:1, title:"Inference as a Service",                    summary:"REST vs gRPC, the serving contract, latency SLOs, and throughput requirements." },
    { id:2, title:"Dynamic Batching",                          summary:"Collecting requests and batching them, latency vs throughput tradeoff." },
    { id:3, title:"TorchServe",                                summary:"PyTorch's serving framework, model archiver, handlers, and deployment." },
    { id:4, title:"Triton Inference Server",                   summary:"NVIDIA Triton, model ensembles, multiple backends, and GPU utilization." },
    { id:5, title:"Latency Budgets",                           summary:"P50/P95/P99 latencies, profiling end-to-end, and finding the bottleneck." },
    { id:6, title:"Model Caching and Warm-Up",                 summary:"Cold start problem, model warming, and pre-loading strategies." },
  ],

  monitoring: [
    { id:1, title:"Why Models Degrade",                        summary:"Data drift, concept drift, label drift — the three ways a model can fail over time." },
    { id:2, title:"Data Drift Detection",                      summary:"PSI, KS test, chi-squared test — statistical methods for feature distribution shifts." },
    { id:3, title:"Concept Drift",                             summary:"The input distribution stays the same but the relationship to output changes." },
    { id:4, title:"Evidently",                                 summary:"Open-source monitoring, drift reports, data quality checks, and ML dashboards." },
    { id:5, title:"Alerting Strategies",                       summary:"Setting thresholds, alert fatigue, and building an effective monitoring system." },
    { id:6, title:"Retraining Triggers",                       summary:"When to retrain, scheduled vs drift-triggered retraining, and the retraining pipeline." },
  ],

  ab_test: [
    { id:1, title:"Why A/B Testing ML Models",                 summary:"Offline metrics vs online metrics, the need to measure real-world impact." },
    { id:2, title:"Experiment Design",                         summary:"Treatment/control split, randomization unit, and avoiding novelty effects." },
    { id:3, title:"Statistical Power and Sample Size",         summary:"Minimum detectable effect, power analysis, and computing the required experiment duration." },
    { id:4, title:"Frequentist A/B Testing",                   summary:"t-test, z-test, p-values, and the multiple testing problem." },
    { id:5, title:"Bayesian A/B Testing",                      summary:"Posterior over the difference, probability of being best, and expected loss." },
    { id:6, title:"Interleaving",                              summary:"Mixing recommendations from both models in one session — a more sensitive alternative." },
  ],

  cicd_ml: [
    { id:1, title:"CI/CD for ML vs Software",                  summary:"The additional complexity: data, models, and evaluation as first-class artifacts." },
    { id:2, title:"Model Validation Gates",                    summary:"Automated tests that a model must pass before deployment, metric thresholds." },
    { id:3, title:"Shadow Deployment",                         summary:"Running the new model in parallel without serving its results, and comparing logs." },
    { id:4, title:"Canary Releases",                           summary:"Gradually shifting traffic to the new model, rollback triggers, and safety." },
    { id:5, title:"GitHub Actions for ML",                     summary:"Automated training, evaluation, and deployment pipelines with GitHub Actions." },
    { id:6, title:"ML Platform Tools",                         summary:"Kubeflow, SageMaker Pipelines, Vertex AI — the managed ML pipeline landscape." },
  ],

  fullpipe: [
    { id:1, title:"Project Scope and Design",                  summary:"Defining the problem, data sources, model approach, and the full system scope." },
    { id:2, title:"Data Ingestion Pipeline",                   summary:"Raw data → feature store, scheduling, validation, and the ingestion architecture." },
    { id:3, title:"Training Pipeline",                         summary:"Feature retrieval, model training, evaluation, and artifact registration." },
    { id:4, title:"Model Registry",                            summary:"Versioning trained models, staging/production environments, and the promotion workflow." },
    { id:5, title:"Serving Pipeline",                          summary:"Model loading, feature serving, inference, and the prediction service." },
    { id:6, title:"Monitoring Pipeline",                       summary:"Logging predictions, computing drift metrics, and triggering alerts." },
    { id:7, title:"The Iteration Loop",                        summary:"Closing the loop: monitoring → data collection → retraining → deployment." },
  ],

};
