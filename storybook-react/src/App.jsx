import IconButton from "./components/IconButton/IconButton";
import TextButton from "./components/TextButton/TextButton";

export default function app(){
  return (
    <React.Fragment>
      <TextButton label="Morram" />


      <IconButton
      src="https://www.bing.com/ck/a?!&&p=777e7fbe5afc06d15c440fd531ab5e91ccf4714b5a26f2da4c22f17870dc2fa0JmltdHM9MTc3MDU5NTIwMA&ptn=3&ver=2&hsh=4&fclid=03e2a4f3-6217-6de4-3b92-b20863d96c2b&u=a1L2ltYWdlcy9zZWFyY2g_cT13YWxscGFwZXImaWQ9Q0NFQkEzM0U1Q0I2QzUyRENEMTUyMDE3RUIxRTQyMTI1OTcyNjA0OSZGT1JNPUlBQ0ZJUg&ntb=1"
      alt="The Last of Us"
      />
    </React.Fragment>
)
}