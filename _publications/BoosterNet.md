---
title: "BoosterNet: Improving Domain Generalization of Deep Neural Nets using Culpability-Ranked Features"
collection: publications
permalink: /publication/BoosterNet
excerpt: '-'
date: 2022-03-03
venue: 'IEEE/CVF CVPR'
paperurl: 'https://openaccess.thecvf.com/content/CVPR2022/papers/Bayasi_BoosterNet_Improving_Domain_Generalization_of_Deep_Neural_Nets_Using_Culpability-Ranked_CVPR_2022_paper.pdf'

---
**Abstract**
Deep learning (DL) models trained to minimize empirical risk on a single domain often fail to generalize when applied to other domains. Model failures due to poor generalizability are quite common in practice and may prove quite perilous in mission-critical applications, e.g., diagnostic imaging where real-world data often exhibits pronounced variability. Such limitations have led to increased interest in domain generalization (DG) approaches that improve the ability of models learned from a single or multiple source domains to generalize to out-of-distribution (OOD) test domains. In this work, we propose BoosterNet, a lean add-on network that can be simply appended to any arbitrary core network to improve its generalization capability without requiring any changes in its architecture or training procedure. Specifically, using a novel measure of feature culpability, BoosterNet is trained episodically on the most and least culpable data features extracted from critical units in the core network based on their contribution towards class-specific prediction errors, which have shown to improve generalization. At inference time, corresponding test image features are extracted from the closest class-specific units, determined by smart gating via a Siamese network, and fed to BoosterNet for improved generalization. We evaluate the performance of BoosterNet within two very different classification problems, digits and skin lesions, and demonstrate a marked improvement in model generalization to OOD test domains compared to SOTA.

**BoosterNet overview**
![BoosterNet overview](http://nourhanb.github.io/images/boosternet_overview.jpg)

**BoosterNet in details**
![BoosterNet in details](http://nourhanb.github.io/images/boosternet_steps.jpg)

[Download paper here](http://nourhanb.github.io/files/boosternet.pdf)
