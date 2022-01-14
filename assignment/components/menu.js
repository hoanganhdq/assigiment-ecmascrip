const menu = {
    render(){
        return `<div class="bg-orange-500 py-1">
        <ul class="max-w-full">
          <li class="inline-block mx-3 pl-5 text-white pl-6 pr-1 font-serif"><a href="/">Trang chủ</a> </li>
          <li class="inline-block mx-3 pl-2 text-white pr-1 font-serif"><a href="/news">Tuyển sinh</a></li>
          <li class="inline-block mx-3 pl-2 text-white pr-1 font-serif"><a href="">Chương trình đào tạo</a></li>
          <li class="inline-block mx-3 pl-2 text-white pr-1 font-serif"><a href="">Tuyển dụng</a></li>
          <li class="inline-block mx-3 pl-2 text-white font-serif pr-20"><a href="">Góc sinh viên</a></li>
          <form class="inline-block ml-56" action="">
            <input class="m-2" type="text">
            <input class="bg-blue-900 border-2 border-white " type="submit" value="TÌM KIẾM">
          </form>
        </ul>
      </div>`
    },
}
export default menu;
