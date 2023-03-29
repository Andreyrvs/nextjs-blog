---
title: 'How to convert Images with Python!'
date: '2023-03-29'
---

instale as libs `PIL` e `pathlib`;

Crie o arquivo main.py

```python
  from PIL import Image
  from pathlib import Path


  def converter(source):

      destination = source.with_suffix(".webp")
      im = Image.open(source)
      print('destination: ', destination)
      return im.save(destination, format="webp")


  def main():
      paths = Path("webp").glob("**/*.png")
      for path in paths:
          webp_path = converter(path)
          print(webp_path)


  main()
```
