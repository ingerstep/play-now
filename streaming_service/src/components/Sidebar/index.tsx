import { FC, useState } from "react";
import cn from "classnames";

import { Button } from "../UI/Button";
import {
  AddPlaylistIcon,
  PlaylistsSvg,
  SerachSvg,
  TracksSvg,
} from "../../assets/svg";
import { IPlaylist, SwitchScreenType } from "../../types";
import { PlaylistModal } from "../PlaylistModal";

interface SidebarProps {
  playlists: IPlaylist[];
  onSwitchScreen: (screen: SwitchScreenType) => void;
}

export const Sidebar: FC<SidebarProps> = ({ playlists, onSwitchScreen }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <aside className="bg-[#f5f5f5] max-w-[289px] w-full overflow-auto xl:max-w-[100%] xl:px-11 xl:py-5 sm:px-4 sm:py-5">
      <h2 className="absolute w-[1px] h-[1px] p-0 border-none overflow-hidden">
        Левая панель навигации
      </h2>
      <nav className="lg:flex lg:items-center px-5 py-8">
        <Button
          className="none lg:flex lg:bg-white lg:min-w-11 lg:w-full lg:rounded-full lg:justify-center lg:items-center lg:mr-5"
          svg={<SerachSvg />}
        />
        <div className="flex flex-col mb-5">
          <Button
            onClick={() => onSwitchScreen("tracks")}
            variant="aside"
            svg={
              <TracksSvg
                className="sm:w-4 ml-3"
                path={cn("xl:stroke-wthite")}
              />
            }
          >
            <span>Треки</span>
          </Button>
          <Button
            onClick={() => onSwitchScreen("playlists")}
            variant="aside"
            svg={
              <PlaylistsSvg
                className="sm:w-4 ml-3"
                path={cn("xl:stroke-wthite")}
              />
            }
          >
            <span>Плейлисты</span>
          </Button>
          <Button
            variant="aside"
            svg={<AddPlaylistIcon />}
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(true);
            }}
          >
            <span className="mr-2">Добавить плейлист</span>
          </Button>

          <PlaylistModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        </div>
        <ul className="text-xl flex flex-col xl:flex-row">
          {playlists.map((playlist, index) => (
            <Button key={index} variant="aside" className="w-full">
              <span>{playlist.name}</span>
            </Button>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
