<template>
  <div id="app">
    <HeaderSite/>
    <AboutSite/>
    <WinesMapSite/>
    <DegustationSite/>
    <FooterSite/>
  </div>
</template>

<script>

import HeaderSite from "@/components/Header/Header";
import AboutSite from "@/components/Main/About";
import WinesMapSite from "@/components/Main/WinesMap";
import DegustationSite from "@/components/Main/Degustation";
import FooterSite from "@/components/Footer/Footer";
export default {
  name: 'App',
  components: {FooterSite, DegustationSite, WinesMapSite, AboutSite, HeaderSite},
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";

#app {
  font-family: 'Playfair Display', serif;
  color: #FFFFFF;
  font-size: 13px;
}

.color-accent {
  color: #998431;
}

.bgc-section-2 {
  background-color: #E6E3C4;
}

.bgc-sections-main {
  background-color: #282828;
}

.bgc-sections-accent {
  background-color: #998431;
  border-radius: 0;
  padding: 18px 30px;

}

li
{
  list-style-type: none;
}

</style>
