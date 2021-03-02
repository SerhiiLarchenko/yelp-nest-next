export const reviewsAdapter = (incomeReviews: any) => {
  return incomeReviews.map((review) => {
    const outReview = { ...review };
    delete outReview.id;
    delete outReview.url;
    delete outReview.user.id;

    return outReview;
  });
};
