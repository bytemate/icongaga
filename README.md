<div id="top">

</div>

<!-- this README use template of
<!-- https://github.com/othneildrew/Best-README-Template -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Version URL][version-url]][version-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/bytedancer-lab/icongaga">
    <img src="https://icongaga-api.bytedancer.workers.dev/api/hexer?name=gaga1" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">ICON-GAGA</h3>

  <p align="center">
    An awesome random icon builder!
    <br />
    <a href="https://icongaga-site.pages.dev/"><strong>Explore the Sites »</strong></a>
    <br />
    <br />
  </p>

</div>

## About The Project

This library is mainly a way of randomly generating icons on one of our internal sites. You can use it directly or develop your own icon library in this way.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

## To Make Platform Website Less boring
We place icon on GUI card to guide user when designing a platform, like hexagon for apps, cylinders for database, avaters for users. But those icons are usually static, which means different entities from same model share the same icon image. What if the icon changes based on some feature of entity?

So we create two examples, one for team model, and one for app model. And Icongaga api generates unique Icon based on string you provide, hope you enjoy it!

![image](https://user-images.githubusercontent.com/5474857/139640924-080d886b-c395-4297-8b99-540910635501.png)


### Installation

Use npm to install it.

- npm
  ```sh
  npm i @bdancer/icon-gaga
  ```

### Service Worker

You can also call our api service.

<img src="https://icongaga-api.bytedancer.workers.dev/api/genHexer?name=gaga" alt="Logo" width="35" height="35">

https://icongaga-api.bytedancer.workers.dev/api/genHexer?name=gaga

<img src="https://icongaga-api.bytedancer.workers.dev/api/genCubers?name=gaga" alt="Logo" width="35" height="35">

https://icongaga-api.bytedancer.workers.dev/api/genCubers?name=gaga

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

[contributors-shield]: https://img.shields.io/github/contributors/bytedancer-lab/icongaga.svg?style=for-the-badge
[contributors-url]: https://github.com/bytedancer-lab/icongaga/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/bytedancer-lab/icongaga.svg?style=for-the-badge
[forks-url]: https://github.com/bytedancer-lab/icongaga/network/members
[stars-shield]: https://img.shields.io/github/stars/bytedancer-lab/icongaga.svg?style=for-the-badge
[stars-url]: https://github.com/bytedancer-lab/icongaga/stargazers
[issues-shield]: https://img.shields.io/github/issues/bytedancer-lab/icongaga.svg?style=for-the-badge
[issues-url]: https://github.com/bytedancer-lab/icongaga/issues
[license-shield]: https://img.shields.io/github/license/bytedancer-lab/icongaga.svg?style=for-the-badge
[license-url]: https://github.com/bytedancer-lab/icongaga/blob/master/LICENSE.txt
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[version-url]: https://img.shields.io/npm/v/@bdancer/icon-gaga.svg?style=for-the-badge
