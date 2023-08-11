---
title: "Continual-GEN: Continual Group Ensembling for Domain-agnostic Skin Lesion Classification"
collection: publications
permalink: /publication/Continual-GEN
excerpt: 'We propose Continual-GEN, a novel forget-free and replay-free subnetwork-based CL method for medical imaging 
with a focus on skin lesion classification. Continual-GEN works in a domain-agnostic setting, where information about domain identity during training or at inference is unavailable.'
date: 2023-08-08
venue: 'the 8th ISIC Workshop at the International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI)'
paperurl: ''

---
**Abstract**
Designing deep learning (DL) models that adapt to new data without forgetting previously acquired knowledge is important in the medical field where data is generated daily, posing a challenge for model adaptation and knowledge retention. Continual learning (CL) enables models to learn continuously without forgetting, typically on a sequence of domains with known domain identities (e.g. source of data). In this work, we address a more challenging and practical CL scenario where information about the domain identity during training and inference is unavailable. We propose Continual-GEN, a novel forget-free, replay-free, and domain-agnostic subnetwork-based CL method for medical imaging with a focus on skin lesion classification. Continual-GEN proposes an ensemble of groups approach that decomposes the training data for each domain into groups of semantically similar clusters. Given two domains, Continual-GEN assesses the similarity between them based on the distance
between their ensembles and assigns a separate subnetwork if the similarity score is low, otherwise updating the same subnetwork to learn both domains. At inference, Continual-GEN selects the best subnetwork using a distance-based metric for each test data, which is directly used for classification. Our quantitative experiments on four skin lesion datasets
demonstrate the superiority of Continual-GEN over state-of-the-art CL methods, highlighting its potential for practical applications in medical imaging. Our code is available at [this http URL](https://github.com/nourhanb/Continual-GEN).

**Continual-GEN overview**
![Continual-GEN overview](http://nourhanb.github.io/images/Continual-GEN_block.jpg)

[Download paper here](http://nourhanb.github.io/files/_Camera__ISICW_2023___Domain_agnostic_CL_for_Skin___Nour.pdf)
