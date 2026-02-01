---
layout: base
title: Paid Library
---

# Paid Library



For a one-time purchase of $5, you gain access to additional writings.



This supports my ability to continue this work.

{% for post in collections.paid %}
- {{ post.data.title }}
{% endfor %}


<p>
  <a class="btn" href="https://jncrisp.gumroad.com/l/gnzye" target="_blank" rel="noopener">
    Purchase access →
  </a>
</p>
