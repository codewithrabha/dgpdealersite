import { Popover, Portal, QrCode } from "@chakra-ui/react";
import BrandIcon from "./icons/BrandIcon";

const Header = () => {
  return (
    <header className="flex max-w-[1280px] mx-auto justify-between items-center bg-transparent pt-[20px]">
      <img
        className="aspect-square w-[80px] rounded"
        src="/images/dgp_logo.png"
        alt=""
      />

      <ul className="flex items-center gap-[20px] text-white">
        <li>Home</li>
        <li>Contact Us</li>
        <li>
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="bg-[#183C78] px-[10px] py-[5px] rounded font-semibold">
                Download App
              </button>
            </Popover.Trigger>
            <Portal>
              <Popover.Positioner>
                <Popover.Content>
                  <Popover.Arrow />
                  <Popover.Body>
                    <Popover.Title fontWeight="medium" textAlign={"center"}>
                      Download for iOs Or Android.
                    </Popover.Title>

                    <div className="flex justify-between mt-[10px]">
                      <QrCode.Root
                        size={"md"}
                        value="https://play.google.com/store/apps/details?id=com.harshita_more.DGPsteel"
                        encoding={{ ecc: "Q" }}
                      >
                        <QrCode.Frame>
                          <QrCode.Pattern />
                        </QrCode.Frame>
                        <QrCode.Overlay>
                          <BrandIcon icon={"android"} />
                        </QrCode.Overlay>
                      </QrCode.Root>

                      <QrCode.Root
                        size={"md"}
                        value="https://apps.apple.com/in/app/dgpsteeltech/id6670567693"
                        encoding={{ ecc: "Q" }}
                      >
                        <QrCode.Frame>
                          <QrCode.Pattern />
                        </QrCode.Frame>
                        <QrCode.Overlay>
                          <BrandIcon icon="" />
                        </QrCode.Overlay>
                      </QrCode.Root>
                    </div>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>
        </li>
      </ul>
    </header>
  );
};

export default Header;
