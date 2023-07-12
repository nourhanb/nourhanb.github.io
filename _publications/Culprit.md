---
title: "Culprit-Prune-Net: Efficient Continual Sequential Multi-domain Learning with Application to Skin Lesion Classification"
collection: publications
permalink: /publication/Culprit
excerpt: 'We propose Culprit-Prune-Net, a simple and effective subnetwork-based continual learning approach for sequential multi-domain learning (MDL). Our approach is based on gradual pruning of units using culpability scores, enabling the network to adapt and learn efficiently a variety of domains. '
date: 2021-03-03
venue: 'the International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI)'
paperurl: 'https://miccai2021.org/openaccess/paperlinks/2021/09/01/123-Paper1095.html'

---
**Abstract**
Despite recent advances in deep learning based medical image computing, clinical implementations in patient-care settings have been limited with lack of sufficiently diverse data during training remaining a pivotal impediment to robust real-life model performance. Continual learning (CL) offers a desirable property of deep neural network models (DNNs), namely the ability to continually learn from new data to accumulate knowledge whilst retaining what has been previously learned. In this work we present a simple and effective CL approach for sequential multi-domain learning (MDL) and showcase its utility in the skin lesion image classification task. Specifically, we propose a new pruning criterion that allows for a fixed network to learn new data domains sequentially over time. Our MDL approach incrementally builds on knowledge gained from previously learned domains, without requiring access to their training data, while simultaneously avoiding catastrophic
forgetting and maintaining accurate performance on all domain data learned. Our new pruning criterion detects culprit units associated with wrong classification in each domain and releases these units so they are dedicated for subsequent learning on new domains. To reduce the computational cost associated with retraining the network post pruning, we implement MergePrune, which efficiently merges the pruning and training stages into one step. Furthermore, at inference time, instead of using a test-time oracle, we design a smart gate using Siamese networks to assign a test image to the most appropriate domain and its corresponding learned model. We present extensive experiments on 6 skin lesion image databases, representing different domains with varying levels of data bias and class imbalance, including quantitative comparisons against multiple baselines and state-of-the-art methods, which demonstrate superior performance and efficient computations of our proposed method.

**Culprit-Prune-Net overview**
![Culprit-Prune-Net overview](http://nourhanb.github.io/images/culprit_block.jpg)

[Download paper here](https://www2.cs.sfu.ca/~hamarneh/ecopy/miccai2021.pdf)
