---
title: "AViT: Adapting Vision Transformers for Small Skin Lesion Segmentation Datasets"
collection: publications
permalink: /publication/AViT
excerpt: '-'
date: 2023-07-07
venue: 'Eighth ISIC Skin Image Analysis Workshop @MICCAI'
paperurl: 'https://www2.cs.sfu.ca/~hamarneh/ecopy/miccai_isic2023b.pdf'

---
**Abstract**
Skin lesion segmentation (SLS) plays an important role in skin lesion analysis. Vision transformers (ViTs) are considered an auspicious solution for SLS, but they require more training data compared to convolutional neural networks (CNNs) due to their inherent parameter heavy structure and lack of some inductive biases. To alleviate this issue, current approaches fine-tune pre-trained ViT backbones on SLS datasets, aiming to leverage the knowledge learned from a larger set of natural images to lower the amount of skin training data needed. However, fully fine-tuning all parameters of large backbones is computationally expensive and memory intensive. In this paper, we propose AViT, a novel efficient strategy to mitigate ViTs’ data-hunger by transferring any pretrained ViTs to the SLS task. Specifically, we integrate lightweight modules (adapters) within the transformer layers, which modulate the feature representation of a ViT without updating its re-trained weights. In addition, we employ a shallow CNN as a prompt generator to create a prompt embedding from the input image, which grasps fine-grained information and CNN’s inductive biases to guide the segmentation task on small datasets. Our quantitative experiments on 4 skin lesion datasets demonstrate that AViT achieves competitive, and at times superior, performance to SOTA but with significantly fewer trainable parameters. Our code is available at [this http URL](https://github.com/siyi-wind/AViT).

**AViT overview**
![AViT overview](http://nourhanb.github.io/images/AViT_block.jpg)

[Download paper here](http://nourhanb.github.io/files/AViT.pdf)
