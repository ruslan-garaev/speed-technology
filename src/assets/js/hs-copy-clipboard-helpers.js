function toggleCopyButtons(id) {
  if (!document.querySelector(`${id} [role="tablist"]`)) return false;

  const tabs = HSTabs.getInstance(`${id} [role="tablist"]`);

  tabs.on('change', ({ _, current }) => {
    const copyButtons = document.querySelectorAll(`${id} [data-hs-associated-tab]`);

    copyButtons.forEach((elI) => {
      const associatedTab = JSON.parse(elI.getAttribute('data-hs-associated-tab'));

      if (associatedTab.includes(current)) {
        elI.classList.remove('hidden');
        elI.classList.add('inline-flex');
      } else {
        elI.classList.remove('inline-flex');
        elI.classList.add('hidden');
      }
    });
  });
}