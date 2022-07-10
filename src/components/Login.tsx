import { Button } from "./Button";
import { useMemo, useState } from "react";

export const Login = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const isConfirmed = useMemo(
    () => account.email.length > 0 && account.password.length > 0,
    [account]
  );

  return (
    <div>
      <div>
        <span>이메일</span>
        <input
          type="text"
          aria-label="email-input"
          value={account.email}
          onChange={(e) => setAccount({ ...account, email: e.target.value })}
        />
      </div>
      <div>
        <span>비밀번호</span>
        <input
          type="text"
          aria-label="password-input"
          value={account.password}
          onChange={(e) => setAccount({ ...account, password: e.target.value })}
        />
      </div>
      <Button title="로그인" onClick={() => {}} disabled={!isConfirmed} />
    </div>
  );
};
