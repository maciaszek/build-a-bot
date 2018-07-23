// function applyStyle(element, binding) {
//   Object.keys(binding.value).forEach((position) => {
//     element.style[position] = binding.value[position];
//   });
//   element.style.position = 'absolute';
// }

// export default {
//   bind: (element, binding) => {
//     // if (binding.arg !== 'position') return;
//     applyStyle(element, binding);
//   },
//   update: (element, binding) => {
//     applyStyle(element, binding);
//   },
// };

export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}
