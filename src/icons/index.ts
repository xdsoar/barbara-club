import Vue from 'vue';
import SvgIcon from '@/layout/components/SvgIcon.vue'; 

Vue.component('svg-icon', SvgIcon);

const requireAll = (requireContext: any) => requireContext.keys().map(requireContext);

const req = require.context('./svg', false, /\.svg$/);

requireAll(req);

// export default req;