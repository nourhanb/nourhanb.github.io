---
title: "Transfer Without Forgetting"
collection: blogsbynour
permalink: /blogsbynour/twf
#excerpt: 'We propose Continual-GEN, a novel forget-free and replay-free subnetwork-based CL method for medical imaging 
#with a focus on skin lesion classification. Continual-GEN works in a domain-agnostic setting, where information about domain identity during training or at inference is unavailable.'
date: 2023-11-07
#venue: 'the 8th ISIC Workshop at the International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI)'
#paperurl: 'https://www2.cs.sfu.ca/~hamarneh/ecopy/miccai_isic2023a.pdf'

---
**Paper Abstract**
This work investigates the entanglement between Continual Learning (CL) and Transfer Learning (TL). In particular, we shed light on the widespread application of network pretraining, highlighting that it is itself subject to catastrophic forgetting. Unfortunately, this issue leads to the under-exploitation of knowledge transfer during later tasks. On this ground, we propose Transfer without Forgetting (TwF), a hybrid approach building upon a fixed pretrained sibling network, which continuously propagates the knowledge inherent in the source domain through a layer-wise loss term. Our experiments indicate that TwF steadily outperforms other CL methods across a variety of settings, averaging a 4.81% gain in Class-Incremental accuracy over a variety of datasets and different buffer sizes. 

**Paper Summary**

[Click to download summary of the paper](http://nourhanb.github.io/_blogsbynour/twf.pdf)
