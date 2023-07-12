---
title: "FairDisCo: Fairer AI in Dermatology via Disentanglement Contrastive Learning"
collection: publications
permalink: /publication/Fairdisco
excerpt: 'We investigated skin-type fairness in skin lesion classification datasets and models. We proposed FairDisCo, a novel deep neural network featuring disentangled representation learning and contrastive learning to promote fairness and boost classification accuracy.'
date: 2022-11-11
venue: 'the European Conference on Computer Vision (ECCV) ISIC Workshops'
paperurl: 'https://arxiv.org/abs/2208.10013'

---
**Abstract**
Deep learning models have achieved great success in automating skin lesion diagnosis. However, the ethnic disparity in these models' predictions, where lesions on darker skin types are usually underrepresented and have lower diagnosis accuracy, receives little attention. In this paper, we propose FairDisCo, a disentanglement deep learning framework with contrastive learning that utilizes an additional network branch to remove sensitive attributes, i.e. skin-type information from representations for fairness and another contrastive branch to enhance feature extraction. We compare FairDisCo to three fairness methods, namely, resampling, reweighting, and attribute-aware, on two newly released skin lesion datasets with different skin types: Fitzpatrick17k and Diverse Dermatology Images (DDI). We adapt two fairness-based metrics DPM and EOM for our multiple classes and sensitive attributes task, highlighting the skin-type bias in skin lesion classification. Extensive experimental evaluation demonstrates the effectiveness of FairDisCo, with fairer and superior performance on skin lesion classification tasks. The code is publicly available at [this http URL](https://github.com/siyi-wind/FairDisCo).

**FairDisCo overview**
![FairDisCo overview](http://nourhanb.github.io/images/Fairdisco_block.jpg)

[Download paper here](http://nourhanb.github.io/files/fairdisco.pdf)
