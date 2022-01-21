'use strict';

module.exports = () => {
  return `<style>
  .link-preview {
    padding: 0;
    display: flex;
    flex: 0 0 auto;
    cursor: pointer;
  }
  .link-review-content {
    padding: 1rem;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    flex-direction: column;
  }
  .link-preview__title {
    margin: 0.8rem 0;
    max-height: 40px;
    font-weight: 600;
    line-height: 20px;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .link-preview__description {
    margin-top: 8px;
    display: block;
    color: rgba(0, 0, 0, 0.8);
    line-height: 20px;
    font-weight: 400;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
  }
  .link-preview__domain {
    margin-top: 12px;
    display: block;
    color: rgba(0,0,0,0.8);
  }
  .link-preview-image {
    background-position: 50% 50%;
    background-size: cover;
    background-origin: border-box;
    height: 180px;
    width: 180px;
    box-shadow: inset 0 0 0 1px rgb(230 230 230);
    max-width: 100%;
    display: block;
    padding: 0;
    margin: 0;
  }
</style>`;
};
