const stepifyScript = (script:any) =>
  script.map((step: any) => {
    if (step.options) {
      return {
        ...step,
        options: step.options.map((option: any, idx: number) => ({
          ...option,
          value: idx
        }))
      };
    } else {
      return step;
    }
  });

export { stepifyScript };
