"use strict";(self.webpackChunkBlog_System=self.webpackChunkBlog_System||[]).push([[8,9],{71:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var r=t(1),n=t(3),a=t(10),l=t(63),i=t(65),o=t(72);const c=n.memo((()=>{const e=(0,i.C)((e=>e.authReducer.userInfo)),s=(0,l.UO)().id,{data:t,isLoading:c}=(0,a.mr)(`id=${s}`,{refetchOnMountOrArgChange:!0}),[d,g]=(0,n.useState)({title:"",body:""}),[u,b]=(0,n.useState)({isTitleError:!1,isContentError:!1}),[m]=(0,a.Bq)(),x=(0,n.useRef)(),h=(0,n.useRef)(),[j,p]=(0,n.useState)(!1),f=(0,l.s0)();return(0,n.useEffect)((()=>{t&&void 0!==t[0]&&(e.id!==t[0].userId&&(alert("Woops! it seems something get wrong! X_X"),f(`/${e.username}/posts`)),""!==d.title&&""!==d.body||g(t[0])),j&&setTimeout((()=>{p(!1)}),3e3)}),[c,j]),(0,r.jsxs)(r.Fragment,{children:[j&&(0,r.jsx)(o.default,{onClickCloseBtn:e=>{e.target!==e.currentTarget&&p(!1)},promptText:"更新成功!"}),(0,r.jsxs)("form",Object.assign({onSubmit:e=>{e.preventDefault(),(""===d.title?(b(Object.assign(Object.assign({},u),{isTitleError:!0})),x.current.focus(),0):""!==d.body||(b(Object.assign(Object.assign({},u),{isContentError:!0})),h.current.focus(),0))&&void 0!==d&&void 0!==s&&m({ID:s,title:d.title,body:d.body}).unwrap().then((()=>{p(!0)}))},className:"ml-5 sm:w-96 prose lg:prose-xl"},{children:[(0,r.jsx)("h2",Object.assign({className:"text-3xl font-bold mt-5"},{children:"變更文章"})),(0,r.jsx)("label",Object.assign({className:"block mb-1"},{children:(0,r.jsx)("input",{type:"text",placeholder:"文章標題",className:"w-full rounded-md p-3 btn "+(u.isTitleError?"field-warning":"focus-input"),ref:x,value:d.title,onChange:e=>{g(Object.assign(Object.assign({},d),{title:e.currentTarget.value})),b(Object.assign(Object.assign({},u),{isTitleError:!1}))}})})),(0,r.jsx)("div",Object.assign({className:(u.isTitleError?"":"invisible")+" text-red-500 text-sm height-[36px] mb-2"},{children:"請輸入標題!"})),(0,r.jsx)("label",Object.assign({className:"block mt-1 mb-1"},{children:(0,r.jsx)("textarea",{cols:30,rows:10,placeholder:"文章內容",className:"w-full rounded-md p-3 btn "+(u.isContentError?"field-warning":"focus-input"),ref:h,value:d.body,onChange:e=>{g(Object.assign(Object.assign({},d),{body:e.currentTarget.value})),b(Object.assign(Object.assign({},u),{isContentError:!1}))}})})),(0,r.jsx)("div",Object.assign({className:(u.isContentError?"":"invisible")+" text-red-500 text-sm height-[36px] mb-2"},{children:"請輸入內容!"})),(0,r.jsx)("button",Object.assign({className:"post-btn"},{children:"更新"}))]}))]})}))},72:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var r=t(1);const n=e=>{const{onClickCloseBtn:s,promptText:t}=e;return(0,r.jsxs)("div",Object.assign({id:"alert-3",className:"absolute top-[58px] left-0 right-0 flex p-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",role:"alert"},{children:[(0,r.jsx)("svg",Object.assign({"aria-hidden":"true",className:"flex-shrink-0 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})),(0,r.jsx)("span",Object.assign({className:"sr-only"},{children:"Info"})),(0,r.jsx)("div",Object.assign({className:"ml-3 text-sm font-medium"},{children:t})),(0,r.jsxs)("button",Object.assign({type:"button",onClick:e=>{s(e)},className:"ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700","data-dismiss-target":"#alert-3","aria-label":"Close"},{children:[(0,r.jsx)("span",Object.assign({className:"sr-only"},{children:"Close"})),(0,r.jsx)("svg",Object.assign({"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}))]}))]}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUVmLFNBQVUsRUFBQyxTQUFLLE9BQVFNLE9BQU9DLE9BQU8sQ0FBRVEsVUFBVyxXQUFhLENBQUVmLFNBQVUsWUFBYSxTQUFLLE1BQU9NLE9BQU9DLE9BQU8sQ0FBRSxjQUFlLE9BQVFRLFVBQVcsVUFBV1UsS0FBTSxlQUFnQkMsUUFBUyxZQUFhQyxNQUFPLDhCQUFnQyxDQUFFM0IsVUFBVSxTQUFLLE9BQVEsQ0FBRTRCLFNBQVUsVUFBV0MsRUFBRyxxTUFBc01DLFNBQVUsc0JBQTJCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CbG9nLVN5c3RlbS8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL015UG9zdExpc3QvTXlQb3N0RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9CbG9nLVN5c3RlbS8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9TdWNjZXNzSW5mb0Jhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMb2FkUG9zdHNRdWVyeSwgdXNlVXBkYXRlUG9zdE11dGF0aW9uIH0gZnJvbSAnQC9zZXJ2aWNlL3BvdHNTZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9zZXJ2aWNlL2hvb2tzJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFN1Y2Nlc3NJbmZvQmFyIGZyb20gJ0AvY29tcG9uZW50cy9zaGFyZWQvU3VjY2Vzc0luZm9CYXInO1xyXG4vLyBDb250YWluZXJcclxuY29uc3QgTXlQb3N0RWRpdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckluZm8gPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoUmVkdWNlci51c2VySW5mbyk7XHJcbiAgICBjb25zdCBwb3N0SUQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICAgIGNvbnN0IHsgZGF0YTogc2VsZWN0ZWRQb3N0LCBpc0xvYWRpbmc6IGlzTG9hZGluZ1Bvc3QsIH0gPSB1c2VMb2FkUG9zdHNRdWVyeShgaWQ9JHtwb3N0SUR9YCwgeyByZWZldGNoT25Nb3VudE9yQXJnQ2hhbmdlOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgW2VkaXRpbmdQb3N0LCBzZXRFZGl0aW5nUG9zdF0gPSB1c2VTdGF0ZSh7IHRpdGxlOiBcIlwiLCBib2R5OiBcIlwiIH0pO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRlUmVzdWx0LCBzZXRWYWxpZGF0ZVJlc3VsdF0gPSB1c2VTdGF0ZSh7IGlzVGl0bGVFcnJvcjogZmFsc2UsIGlzQ29udGVudEVycm9yOiBmYWxzZSB9KTtcclxuICAgIGNvbnN0IFt1cGRhdGVQb3N0XSA9IHVzZVVwZGF0ZVBvc3RNdXRhdGlvbigpO1xyXG4gICAgY29uc3QgcmVmVGl0bGUgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHJlZkNvbnRlbnQgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtpc1Nob3dTdWNjZXNzSW5mbywgc2V0SXNTaG93U3VjY2Vzc0luZm9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgZWRpdGluZ1RpdGxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdGluZ1Bvc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlZGl0aW5nUG9zdCksIHsgdGl0bGU6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUgfSkpO1xyXG4gICAgICAgIHNldFZhbGlkYXRlUmVzdWx0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmFsaWRhdGVSZXN1bHQpLCB7IGlzVGl0bGVFcnJvcjogZmFsc2UgfSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGVkaXRpbmdCb2R5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdGluZ1Bvc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlZGl0aW5nUG9zdCksIHsgYm9keTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSB9KSk7XHJcbiAgICAgICAgc2V0VmFsaWRhdGVSZXN1bHQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB2YWxpZGF0ZVJlc3VsdCksIHsgaXNDb250ZW50RXJyb3I6IGZhbHNlIH0pKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBmb3JtVmFsaWRhdG9yID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlZGl0aW5nUG9zdC50aXRsZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBzZXRWYWxpZGF0ZVJlc3VsdChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlUmVzdWx0KSwgeyBpc1RpdGxlRXJyb3I6IHRydWUgfSkpO1xyXG4gICAgICAgICAgICByZWZUaXRsZS5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVkaXRpbmdQb3N0LmJvZHkgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc2V0VmFsaWRhdGVSZXN1bHQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB2YWxpZGF0ZVJlc3VsdCksIHsgaXNDb250ZW50RXJyb3I6IHRydWUgfSkpO1xyXG4gICAgICAgICAgICByZWZDb250ZW50LmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBmb3JtU3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGZvcm1WYWxpZGF0b3IoKSAmJiBlZGl0aW5nUG9zdCAhPT0gdW5kZWZpbmVkICYmIHBvc3RJRCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVBvc3QoeyBJRDogcG9zdElELCB0aXRsZTogZWRpdGluZ1Bvc3QudGl0bGUsIGJvZHk6IGVkaXRpbmdQb3N0LmJvZHkgfSlcclxuICAgICAgICAgICAgICAgIC51bndyYXAoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93U3VjY2Vzc0luZm8odHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBjbG9zZVN1Y2Nlc3NJbmZvID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgICAgICBzZXRJc1Nob3dTdWNjZXNzSW5mbyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkUG9zdCAmJiBzZWxlY3RlZFBvc3RbMF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodXNlckluZm8uaWQgIT09IHNlbGVjdGVkUG9zdFswXS51c2VySWQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdXb29wcyEgaXQgc2VlbXMgc29tZXRoaW5nIGdldCB3cm9uZyEgWF9YJyk7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZShgLyR7dXNlckluZm8udXNlcm5hbWV9L3Bvc3RzYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBpZiAoZWRpdGluZ1Bvc3QudGl0bGUgPT09IFwiXCIgfHwgZWRpdGluZ1Bvc3QuYm9keSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgc2V0RWRpdGluZ1Bvc3Qoc2VsZWN0ZWRQb3N0WzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAoaXNTaG93U3VjY2Vzc0luZm8pIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3dTdWNjZXNzSW5mbyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9LCBbaXNMb2FkaW5nUG9zdCwgaXNTaG93U3VjY2Vzc0luZm9dKTtcclxuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbaXNTaG93U3VjY2Vzc0luZm8gJiYgX2pzeChTdWNjZXNzSW5mb0JhciwgeyBvbkNsaWNrQ2xvc2VCdG46IGNsb3NlU3VjY2Vzc0luZm8sIHByb21wdFRleHQ6IFwi5pu05paw5oiQ5YqfIVwiIH0pLCBfanN4cyhcImZvcm1cIiwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiBmb3JtU3VibWl0SGFuZGxlciwgY2xhc3NOYW1lOiBcIm1sLTUgc206dy05NiBwcm9zZSBsZzpwcm9zZS14bFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ0ZXh0LTN4bCBmb250LWJvbGQgbXQtNVwiIH0sIHsgY2hpbGRyZW46IFwiXFx1OEI4QVxcdTY2RjRcXHU2NTg3XFx1N0FFMFwiIH0pKSwgX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYmxvY2sgbWItMVwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHU2NTg3XFx1N0FFMFxcdTZBMTlcXHU5ODRDXCIsIGNsYXNzTmFtZTogYHctZnVsbCByb3VuZGVkLW1kIHAtMyBidG4gJHt2YWxpZGF0ZVJlc3VsdC5pc1RpdGxlRXJyb3IgPyBcImZpZWxkLXdhcm5pbmdcIiA6IFwiZm9jdXMtaW5wdXRcIn1gLCByZWY6IHJlZlRpdGxlLCB2YWx1ZTogZWRpdGluZ1Bvc3QudGl0bGUsIG9uQ2hhbmdlOiBlZGl0aW5nVGl0bGUgfSkgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGAke3ZhbGlkYXRlUmVzdWx0LmlzVGl0bGVFcnJvciA/IFwiXCIgOiBcImludmlzaWJsZVwifSB0ZXh0LXJlZC01MDAgdGV4dC1zbSBoZWlnaHQtWzM2cHhdIG1iLTJgIH0sIHsgY2hpbGRyZW46IFwi6KuL6Ly45YWl5qiZ6aGMIVwiIH0pKSwgX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYmxvY2sgbXQtMSBtYi0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcInRleHRhcmVhXCIsIHsgY29sczogMzAsIHJvd3M6IDEwLCBwbGFjZWhvbGRlcjogXCJcXHU2NTg3XFx1N0FFMFxcdTUxNjdcXHU1QkI5XCIsIGNsYXNzTmFtZTogYHctZnVsbCByb3VuZGVkLW1kIHAtMyBidG4gJHt2YWxpZGF0ZVJlc3VsdC5pc0NvbnRlbnRFcnJvciA/IFwiZmllbGQtd2FybmluZ1wiIDogXCJmb2N1cy1pbnB1dFwifWAsIHJlZjogcmVmQ29udGVudCwgdmFsdWU6IGVkaXRpbmdQb3N0LmJvZHksIG9uQ2hhbmdlOiBlZGl0aW5nQm9keSB9KSB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogYCR7dmFsaWRhdGVSZXN1bHQuaXNDb250ZW50RXJyb3IgPyBcIlwiIDogXCJpbnZpc2libGVcIn0gdGV4dC1yZWQtNTAwIHRleHQtc20gaGVpZ2h0LVszNnB4XSBtYi0yYCB9LCB7IGNoaWxkcmVuOiBcIuiri+i8uOWFpeWFp+WuuSFcIiB9KSksIF9qc3goXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3Bvc3QtYnRuJyB9LCB7IGNoaWxkcmVuOiBcIlxcdTY2RjRcXHU2NUIwXCIgfSkpXSB9KSldIH0pKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhNeVBvc3RFZGl0b3IpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUWGxRYjNOMFJXUnBkRzl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dkxpNHZMaTR2YzNKakwyTnZiWEJ2Ym1WdWRITXZjR0ZuWlhNdlRYbFFiM04wVEdsemRDOU5lVkJ2YzNSRlpHbDBiM0l1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3hQUVVGUExFdEJRVXNzUlVGQlJTeEZRVUZGTEZGQlFWRXNSVUZCUlN4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzVDBGQlR5eERRVUZETzBGQlF6TkVMRTlCUVU4c1JVRkJSU3hwUWtGQmFVSXNSVUZCUlN4eFFrRkJjVUlzUlVGQlJTeE5RVUZOTEhWQ1FVRjFRaXhEUVVGRE8wRkJRMnBHTEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hyUWtGQmEwSXNRMEZCUXp0QlFVTTNReXhQUVVGUExFVkJRVVVzWTBGQll5eEZRVUZGTEUxQlFVMHNhVUpCUVdsQ0xFTkJRVU03UVVGRGFrUXNUMEZCVHl4RlFVRkZMRmRCUVZjc1JVRkJSU3hOUVVGTkxHdENRVUZyUWl4RFFVRkRPMEZCUXk5RExFOUJRVThzWTBGQll5eE5RVUZOTEc5RFFVRnZReXhEUVVGRE8wRkJSMmhGTEZsQlFWazdRVUZEV2l4TlFVRk5MRmxCUVZrc1IwRkJZU3hIUVVGSExFVkJRVVU3U1VGRmJFTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1kwRkJZeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU55UlN4TlFVRk5MRTFCUVUwc1IwRkJSeXhUUVVGVExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZET1VJc1RVRkJUU3hGUVVOS0xFbEJRVWtzUlVGQlJTeFpRVUZaTEVWQlEyeENMRk5CUVZNc1JVRkJSU3hoUVVGaExFZEJRM3BDTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU1zVFVGQlRTeE5RVUZOTEVWQlFVVXNSVUZCUlN4RlFVRkZMSGxDUVVGNVFpeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRNMFVzVFVGQlRTeERRVUZGTEZkQlFWY3NSVUZCUlN4alFVRmpMRU5CUVVVc1IwRkJSeXhSUVVGUkxFTkJRVU1zUlVGQlF5eExRVUZMTEVWQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1JVRkJReXhGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETzBsQlEzUkZMRTFCUVUwc1EwRkJSU3hqUVVGakxFVkJRVVVzYVVKQlFXbENMRU5CUVVVc1IwRkJSeXhSUVVGUkxFTkJRVU1zUlVGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4RlFVRkZMR05CUVdNc1JVRkJSU3hMUVVGTExFVkJRVU1zUTBGQlF5eERRVUZETzBsQlEzSkhMRTFCUVUwc1EwRkJSU3hWUVVGVkxFTkJRVVVzUjBGQlJ5eHhRa0ZCY1VJc1JVRkJSU3hEUVVGRE8wbEJReTlETEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1JVRkJPRU1zUTBGQlF6dEpRVU4wUlN4TlFVRk5MRlZCUVZVc1IwRkJSeXhOUVVGTkxFVkJRV2xFTEVOQlFVTTdTVUZETTBVc1RVRkJUU3hEUVVGRkxHbENRVUZwUWl4RlFVRkZMRzlDUVVGdlFpeERRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM0JGTEUxQlFVMHNVVUZCVVN4SFFVRkhMRmRCUVZjc1JVRkJSU3hEUVVGRE8wbEJSUzlDTEUxQlFVMHNXVUZCV1N4SFFVRkhMRU5CUVVNc1MwRkJNRU1zUlVGQlJTeEZRVUZGTzFGQlEyeEZMR05CUVdNc2FVTkJRVXNzVjBGQlZ5eExRVUZGTEV0QlFVc3NSVUZCUlN4TFFVRkxMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzU1VGQlJ5eERRVUZCTzFGQlEyNUZMR2xDUVVGcFFpeHBRMEZCU3l4alFVRmpMRXRCUVVVc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlJTeERRVUZETzBsQlF6bEVMRU5CUVVNc1EwRkJRenRKUVVWR0xFMUJRVTBzVjBGQlZ5eEhRVUZITEVOQlFVTXNTMEZCTmtNc1JVRkJSU3hGUVVGRk8xRkJRM0JGTEdOQlFXTXNhVU5CUVVzc1YwRkJWeXhMUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNZVUZCWVN4RFFVRkRMRXRCUVVzc1NVRkJSU3hEUVVGQk8xRkJRMnBGTEdsQ1FVRnBRaXhwUTBGQlN5eGpRVUZqTEV0QlFVVXNZMEZCWXl4RlFVRkZMRXRCUVVzc1NVRkJSU3hEUVVGRE8wbEJRMmhGTEVOQlFVTXNRMEZCUXp0SlFVVkdMRTFCUVUwc1lVRkJZU3hIUVVGSExFZEJRVWNzUlVGQlJUdFJRVVY2UWl4SlFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFdEJRVXNzUlVGQlJTeEZRVUZETzFsQlF6RkNMR2xDUVVGcFFpeHBRMEZCU3l4alFVRmpMRXRCUVVVc1dVRkJXU3hGUVVGRkxFbEJRVWtzU1VGQlJTeERRVUZETzFsQlF6TkVMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdXVUZEZWtJc1QwRkJUeXhMUVVGTExFTkJRVU03VTBGRFpEdFJRVVZFTEVsQlFVY3NWMEZCVnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhGUVVGRkxFVkJRVU03V1VGRGVrSXNhVUpCUVdsQ0xHbERRVUZMTEdOQlFXTXNTMEZCUlN4alFVRmpMRVZCUVVVc1NVRkJTU3hKUVVGRkxFTkJRVU03V1VGRE4wUXNWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFpRVU16UWl4UFFVRlBMRXRCUVVzc1EwRkJRenRUUVVOa08xRkJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEWkN4RFFVRkRMRU5CUVVNN1NVRkZSaXhOUVVGTkxHbENRVUZwUWl4SFFVRkhMRU5CUVVNc1MwRkJkVU1zUlVGQlJTeEZRVUZGTzFGQlJYQkZMRXRCUVVzc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6dFJRVVYyUWl4SlFVRkhMR0ZCUVdFc1JVRkJSU3hKUVVGSkxGZEJRVmNzUzBGQlN5eFRRVUZUTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1JVRkJRenRaUVVOMFJTeFZRVUZWTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGSExFdEJRVXNzUlVGQlJTeFhRVUZYTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZETEVOQlFVTTdhVUpCUXpORkxFMUJRVTBzUlVGQlJUdHBRa0ZEVWl4SlFVRkpMRU5CUVVNc1IwRkJSU3hGUVVGRk8yZENRVU5TTEc5Q1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6ZENMRU5CUVVNc1EwRkJReXhEUVVGQk8xTkJRMGc3U1VGRFNDeERRVUZETEVOQlFVTTdTVUZGUml4TlFVRk5MR2RDUVVGblFpeEhRVUZITEVOQlFVTXNTMEZCTUVNc1JVRkJSU3hGUVVGRk8xRkJRM1JGTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhMUVVGTExFTkJRVU1zWVVGQllTeEZRVUZGTzFsQlEzaERMRzlDUVVGdlFpeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUXpkQ08wbEJRMGdzUTBGQlF5eERRVUZETzBsQlJVWXNVMEZCVXl4RFFVRkRMRWRCUVVjc1JVRkJSVHRSUVVWaUxFbEJRVWNzV1VGQldTeEpRVUZKTEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFVkJRVU03V1VGRkwwTXNTVUZCUnl4UlFVRlJMRU5CUVVNc1JVRkJSU3hMUVVGTExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVNN1owSkJRM2hETEV0QlFVc3NRMEZCUXl3d1EwRkJNRU1zUTBGQlF5eERRVUZETzJkQ1FVTnNSQ3hSUVVGUkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4UlFVRlJMRU5CUVVNc1EwRkJRenRoUVVONlF6dFpRVUZCTEVOQlFVTTdXVUZGUml4SlFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFdEJRVXNzUlVGQlJTeEpRVUZKTEZkQlFWY3NRMEZCUXl4SlFVRkpMRXRCUVVzc1JVRkJSU3hGUVVGRE8yZENRVU55UkN4alFVRmpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYWtNN1dVRkJRU3hEUVVGRE8xTkJRMGc3VVVGQlFTeERRVUZETzFGQlJVWXNTVUZCUnl4cFFrRkJhVUlzUlVGQlF6dFpRVU51UWl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRk8yZENRVU5rTEc5Q1FVRnZRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlF6bENMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU5XTzFGQlFVRXNRMEZCUXp0SlFVVktMRU5CUVVNc1JVRkJSU3hEUVVGRExHRkJRV0VzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRExFTkJRVUU3U1VGRmRFTXNUMEZCVHl4RFFVTk1MRGhDUVVOSkxHbENRVUZwUWl4SlFVRkpMRXRCUVVNc1kwRkJZeXhKUVVGRExHVkJRV1VzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hWUVVGVkxFVkJRVVVzVDBGQlR5eEhRVUZKTEVWQlJXcEhMRGhDUVVGTkxGRkJRVkVzUlVGQlJTeHBRa0ZCYVVJc1JVRkJSU3hUUVVGVExFVkJRVU1zWjBOQlFXZERMR2xDUVVjelJTd3lRa0ZCU1N4VFFVRlRMRVZCUVVNc2VVSkJRWGxDTERoRFFVVnNReXhGUVVkTUxEaENRVUZQTEZOQlFWTXNSVUZCUXl4WlFVRlpMR2RDUVVNelFpeG5Ra0ZCVHl4SlFVRkpMRVZCUVVNc1RVRkJUU3hGUVVGRExGZEJRVmNzUlVGQlF5d3dRa0ZCVFN4RlFVTTVRaXhUUVVGVExFVkJRVVVzTmtKQlFUWkNMR05CUVdNc1EwRkJReXhaUVVGWkxFTkJRVUVzUTBGQlF5eERRVUZCTEdWQlFXVXNRMEZCUVN4RFFVRkRMRU5CUVVFc1lVRkJZU3hGUVVGRkxFVkJRMjVITEVkQlFVY3NSVUZCUlN4UlFVRlJMRVZCUTJJc1MwRkJTeXhGUVVGRkxGZEJRVmNzUTBGQlF5eExRVUZMTEVWQlEzaENMRkZCUVZFc1JVRkJSeXhaUVVGWkxFZEJRelZDTEVsQlEwa3NSVUZIVWl3MFFrRkJTeXhUUVVGVExFVkJRVVVzUjBGQlJ5eGpRVUZqTEVOQlFVTXNXVUZCV1N4RFFVRkJMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVUVzUTBGQlF5eERRVUZCTEZkQlFWY3NNRU5CUVRCRExHZENRVU53Unl4UlFVRlJMRWxCUTA0c1JVRkhUaXc0UWtGQlR5eFRRVUZUTEVWQlFVTXNhVUpCUVdsQ0xHZENRVU5vUXl4dFFrRkJWU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUTJ4Q0xGZEJRVmNzUlVGQlJ5d3dRa0ZCVFN4RlFVTndRaXhUUVVGVExFVkJRVWtzTmtKQlFUWkNMR05CUVdNc1EwRkJReXhqUVVGakxFTkJRVUVzUTBGQlF5eERRVUZCTEdWQlFXVXNRMEZCUVN4RFFVRkRMRU5CUVVFc1lVRkJZU3hGUVVGRkxFVkJRM1pITEVkQlFVY3NSVUZCU3l4VlFVRlZMRVZCUTJ4Q0xFdEJRVXNzUlVGQlN5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVTXhRaXhSUVVGUkxFVkJRVXNzVjBGQlZ5eEhRVU5vUXl4SlFVTkpMRVZCUjFJc05FSkJRVXNzVTBGQlV5eEZRVUZGTEVkQlFVY3NZMEZCWXl4RFFVRkRMR05CUVdNc1EwRkJRU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZCTEVOQlFVTXNRMEZCUVN4WFFVRlhMREJEUVVFd1F5eG5Ra0ZEZEVjc1VVRkJVU3hKUVVOT0xFVkJSMDRzSzBKQlFWRXNVMEZCVXl4RlFVRkRMRlZCUVZVc2EwTkJSVzVDTEV0QlJVb3NTVUZEVGl4RFFVTktMRU5CUVVFN1FVRkRTQ3hEUVVGRExFTkJRVU03UVVGRlJpeGxRVUZsTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1pZlE9PSIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmNvbnN0IFN1Y2Nlc3NJbmZvQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uQ2xpY2tDbG9zZUJ0biwgcHJvbXB0VGV4dCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjbG9zZUJ0bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBvbkNsaWNrQ2xvc2VCdG4oZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGlkOiBcImFsZXJ0LTNcIiwgY2xhc3NOYW1lOiBcImFic29sdXRlIHRvcC1bNThweF0gbGVmdC0wIHJpZ2h0LTAgZmxleCBwLTQgdGV4dC1ncmVlbi04MDAgcm91bmRlZC1sZyBiZy1ncmVlbi01MCBkYXJrOmJnLWdyYXktODAwIGRhcms6dGV4dC1ncmVlbi00MDBcIiwgcm9sZTogXCJhbGVydFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwic3ZnXCIsIE9iamVjdC5hc3NpZ24oeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzc05hbWU6IFwiZmxleC1zaHJpbmstMCB3LTUgaC01XCIsIGZpbGw6IFwiY3VycmVudENvbG9yXCIsIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcInBhdGhcIiwgeyBmaWxsUnVsZTogXCJldmVub2RkXCIsIGQ6IFwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNy00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNOSA5YTEgMSAwIDAwMCAydjNhMSAxIDAgMDAxIDFoMWExIDEgMCAxMDAtMnYtM2ExIDEgMCAwMC0xLTFIOXpcIiwgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiIH0pIH0pKSwgX2pzeChcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJzci1vbmx5XCIgfSwgeyBjaGlsZHJlbjogXCJJbmZvXCIgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibWwtMyB0ZXh0LXNtIGZvbnQtbWVkaXVtXCIgfSwgeyBjaGlsZHJlbjogcHJvbXB0VGV4dCB9KSksIF9qc3hzKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBjbG9zZUJ0bkhhbmRsZXIsIGNsYXNzTmFtZTogXCJtbC1hdXRvIC1teC0xLjUgLW15LTEuNSBiZy1ncmVlbi01MCB0ZXh0LWdyZWVuLTUwMCByb3VuZGVkLWxnIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTQwMCBwLTEuNSBob3ZlcjpiZy1ncmVlbi0yMDAgaW5saW5lLWZsZXggaC04IHctOCBkYXJrOmJnLWdyYXktODAwIGRhcms6dGV4dC1ncmVlbi00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiLCBcImRhdGEtZGlzbWlzcy10YXJnZXRcIjogXCIjYWxlcnQtM1wiLCBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInNyLW9ubHlcIiB9LCB7IGNoaWxkcmVuOiBcIkNsb3NlXCIgfSkpLCBfanN4KFwic3ZnXCIsIE9iamVjdC5hc3NpZ24oeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzc05hbWU6IFwidy01IGgtNVwiLCBmaWxsOiBcImN1cnJlbnRDb2xvclwiLCB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJwYXRoXCIsIHsgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLCBkOiBcIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCIsIGNsaXBSdWxlOiBcImV2ZW5vZGRcIiB9KSB9KSldIH0pKV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3VjY2Vzc0luZm9CYXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVUzVmpZMlZ6YzBsdVptOUNZWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk4dUxpOXpjbU12WTI5dGNHOXVaVzUwY3k5emFHRnlaV1F2VTNWalkyVnpjMGx1Wm05Q1lYSXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGUFFTeE5RVUZOTEdOQlFXTXNSMEZCYlVJc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJUdEpRVVUzUXl4TlFVRk5MRVZCUVVVc1pVRkJaU3hGUVVGRkxGVkJRVlVzUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVVTVReXhOUVVGTkxHVkJRV1VzUjBGQlJ5eERRVUZETEV0QlFUQkRMRVZCUVVVc1JVRkJSVHRSUVVOdVJTeGxRVUZsTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRNMElzUTBGQlF5eERRVUZETzBsQlJVWXNUMEZCVHl4RFFVTklMRFpDUVVGTExFVkJRVVVzUlVGQlF5eFRRVUZUTEVWQlFVTXNVMEZCVXl4RlFVRkRMSGRJUVVGM1NDeEZRVUZETEVsQlFVa3NSVUZCUXl4UFFVRlBMR2xDUVVVM1Npd3lRMEZCYVVJc1RVRkJUU3hGUVVGRExGTkJRVk1zUlVGQlF5eDFRa0ZCZFVJc1JVRkJReXhKUVVGSkxFVkJRVU1zWTBGQll5eEZRVUZETEU5QlFVOHNSVUZCUXl4WFFVRlhMRVZCUXpkR0xFdEJRVXNzUlVGQlF5dzBRa0ZCTkVJc1owSkJRMnhETEdWQlFVMHNVVUZCVVN4RlFVRkRMRk5CUVZNc1JVRkRjRUlzUTBGQlF5eEZRVUZETEd0SlFVRnJTU3hGUVVOd1NTeFJRVUZSTEVWQlFVTXNVMEZCVXl4SFFVRlJMRWxCUXpWQ0xFVkJSVTRzTmtKQlFVMHNVMEZCVXl4RlFVRkRMRk5CUVZNc01FSkJRVmtzUlVGRGNrTXNORUpCUVVzc1UwRkJVeXhGUVVGRExEQkNRVUV3UWl4blFrRkRia01zVlVGQlZTeEpRVU5XTEVWQlJVNHNaME5CUVZFc1NVRkJTU3hGUVVGRExGRkJRVkVzUlVGQlF5eFBRVUZQTEVWQlFVVXNaVUZCWlN4RlFVTXhReXhUUVVGVExFVkJRVU1zTUUxQlFUQk5MSGxDUVVOb1RTeFZRVUZWTEdkQ1FVRlpMRTlCUVU4c2FVSkJRMnBFTERaQ1FVRk5MRk5CUVZNc1JVRkJReXhUUVVGVExESkNRVUZoTEVWQlEzUkRMREpEUVVGcFFpeE5RVUZOTEVWQlFVTXNVMEZCVXl4RlFVRkRMRk5CUVZNc1JVRkJReXhKUVVGSkxFVkJRVU1zWTBGQll5eEZRVUZETEU5QlFVOHNSVUZCUXl4WFFVRlhMRVZCUXk5RkxFdEJRVXNzUlVGQlF5dzBRa0ZCTkVJc1owSkJRMnhETEdWQlFVMHNVVUZCVVN4RlFVRkRMRk5CUVZNc1JVRkRjRUlzUTBGQlF5eEZRVUZETEc5TlFVRnZUU3hGUVVOMFRTeFJRVUZSTEVWQlFVTXNVMEZCVXl4SFFVRlJMRWxCUXpWQ0xFdEJRMFFzUzBGRFVDeERRVU5VTEVOQlFVTTdRVUZEVGl4RFFVRkRMRU5CUVVFN1FVRkZSQ3hsUVVGbExHTkJRV01zUTBGQlF5SjkiXSwibmFtZXMiOlsidXNlckluZm8iLCJzdGF0ZSIsImF1dGhSZWR1Y2VyIiwicG9zdElEIiwiaWQiLCJkYXRhIiwic2VsZWN0ZWRQb3N0IiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nUG9zdCIsInJlZmV0Y2hPbk1vdW50T3JBcmdDaGFuZ2UiLCJlZGl0aW5nUG9zdCIsInNldEVkaXRpbmdQb3N0IiwidXNlU3RhdGUiLCJ0aXRsZSIsImJvZHkiLCJ2YWxpZGF0ZVJlc3VsdCIsInNldFZhbGlkYXRlUmVzdWx0IiwiaXNUaXRsZUVycm9yIiwiaXNDb250ZW50RXJyb3IiLCJ1cGRhdGVQb3N0IiwicmVmVGl0bGUiLCJ1c2VSZWYiLCJyZWZDb250ZW50IiwiaXNTaG93U3VjY2Vzc0luZm8iLCJzZXRJc1Nob3dTdWNjZXNzSW5mbyIsIm5hdmlnYXRlIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwidXNlcklkIiwiYWxlcnQiLCJ1c2VybmFtZSIsInNldFRpbWVvdXQiLCJjaGlsZHJlbiIsIm9uQ2xpY2tDbG9zZUJ0biIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInByb21wdFRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsImZvY3VzIiwiSUQiLCJ1bndyYXAiLCJ0aGVuIiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVmIiwidmFsdWUiLCJvbkNoYW5nZSIsImNvbHMiLCJyb3dzIiwicHJvcHMiLCJyb2xlIiwiZmlsbCIsInZpZXdCb3giLCJ4bWxucyIsImZpbGxSdWxlIiwiZCIsImNsaXBSdWxlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=