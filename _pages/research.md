---
permalink: /research/
title: "Research Interests"
---
I develop robust, fair, and continually learning deep learning methods for medical imaging. My work focuses on continual (lifelong) learning, domain generalization/OOD robustness, bias mitigation, and clinician-in-the-loop systems that remain reliable under real clinical shift.

**Agentic and Physician-in-the-Loop AI for Oncology Imaging**

I develop agentic AI systems for oncology imaging that work in close collaboration with clinicians. These models go beyond static prediction: they adapt, refine outputs, and incorporate expert feedback during inference to improve reliability under real-world variability. My work spans tumor and organ segmentation, diagnostic classification, and survival prediction from multimodal data (e.g., PET/CT). By combining robust representation learning with interactive and feedback-driven mechanisms, I aim to build systems that not only achieve strong average performance, but remain stable under distribution shift, support clinical decision-making, and provide trustworthy risk stratification in high-stakes cancer care.

**Lifelong Learning**

I develop continual learning methods for medical imaging to handle evolving clinical data without degrading previously learned knowledge. I prevent catastrophic forgetting using update strategies that work under realistic constraints (limited replay, limited compute), and I apply them to medical image classification and incremental adaptation of pretrained/foundation models.

**Out-of-Distribution Generalization**

I develop generalization techniques that keep medical imaging models reliable under domain shift (scanner, site, protocol, and population changes). I focus on learning robust representations through domain-invariant feature learning and shift-aware training objectives so performance does not collapse when deployment data differs from training.

**Fairness, Bias Mitigation, Shortcut Unlearning**

I develop bias-aware training and evaluation strategies that reduce performance gaps across demographic and clinical subgroups. I target dataset imbalance, spurious correlations, and label noise by designing debiasing objectives and subgroup-sensitive analysis that improve worst-group performance and trustworthiness in high-stakes settings.

**Dermatology / Skin Imaging**

I develop robust and fair learning pipelines for skin lesion analysis, with an emphasis on classification under distribution shift. I combine continual learning, domain generalization, and bias mitigation to maintain performance across varied acquisition conditions and patient populations.