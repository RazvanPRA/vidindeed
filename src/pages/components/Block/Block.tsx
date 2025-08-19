import { Box } from "@mantine/core";
import { jobLabels } from "../../../const/label";
import type { BlockProps } from "./Block.d";
import useStyles from "./Block.styled";
import { TimePicker } from "@mantine/dates";
import { useState } from "react";
import TextAreaBlock from "../TextAreaBlock/TextAreaBlock";
import DragBox from "../DragBox/DragBox";
// import useTimePickerStyles from "./useTimePickerStyles";

const Block = ({ type, form }: BlockProps) => {
  const [clockView, setClockView] = useState(false);
  const [musicBoxView, setMusicBoxView] = useState(false);
  const [watermarkBoxView, setWatermarkBoxView] = useState(false);
  const [imagesView, setImagesView] = useState(false);
  const { classes } = useStyles();
  const blockType = (type: string) => {
    const typesArray = [
      "intro",
      "outro",
      "watermark",
      "music",
      "box layovers",
      "instructions",
    ];
    switch (type) {
      case typesArray[0]:
        return (
          <Box className={classes.block}>
            <Box className={classes.title}>{jobLabels.intro.title}</Box>
            <Box className={classes.subTitle}>{jobLabels.intro.box}</Box>
            <TextAreaBlock
              value={form.values.address}
              form={form}
              type={"address"}
            />
          </Box>
        );
      case typesArray[1]:
        return (
          <Box className={classes.block}>
            <Box className={classes.title}>{jobLabels.outro.title}</Box>
            <Box className={classes.subTitle}>{jobLabels.outro.subtitle}</Box>
            <TextAreaBlock
              value={form.values.userChoice}
              form={form}
              type={"userChoice"}
            />
            <Box
              className={classes.subTitle}
              onClick={() => setImagesView((state) => !state)}
            >
              {jobLabels.outro.subtitleImage}
            </Box>
            <Box className={classes.alert}>
              {form.values.imagesArray.length > 0
                ? form.values.imagesArray
                : jobLabels.outro.agentImage}
            </Box>
            {imagesView && <DragBox form={form} initialFiles={form.values.imagesArray} type={'imagesArray'} />}
            <Box>{jobLabels.outro.outroInstruction}</Box>
          </Box>
        );
      case typesArray[2]:
        return (
          <Box className={classes.block}>
            <Box className={classes.title}>{jobLabels.watermark.title}</Box>
            <Box
              onClick={() => setWatermarkBoxView((state) => !state)}
              className={classes.subTitle}
            >
              {jobLabels.watermark.subtitle}
            </Box>
            <Box className={classes.alert}>
              {form.values.watermark
                ? form.values.watermark
                : jobLabels.watermark.value}
            </Box>
            {watermarkBoxView && (
              <DragBox form={form} initialFiles={form.values.watermark} type={'watermark'} />
            )}
          </Box>
        );
      case typesArray[3]:
        return (
          <Box className={classes.block}>
            <Box className={classes.title}>{jobLabels.music.title}</Box>
            <Box
              onClick={() => setMusicBoxView((state) => !state)}
              className={classes.subTitle}
            >
              {jobLabels.music.subtitle}
            </Box>
            <Box>
              {form.values.musicFilesArray.length
                ? form.values.musicFilesArray
                : jobLabels.music.file}
            </Box>
            {musicBoxView && (
              <DragBox form={form} initialFiles={form.values.musicFilesArray} type={'musicFilesArray'} />
            )}
          </Box>
        );
      case typesArray[4]:
        return (
          <Box className={classes.block}>
            <Box className={classes.title}>{jobLabels.boxLayovers.title}</Box>
            <Box>
              <TextAreaBlock
                value={form.values.text}
                form={form}
                type={"text"}
              />
            </Box>
          </Box>
        );
      case typesArray[5]:
        return (
          <Box className={classes.block}>
            <Box className={classes.title}>
              {jobLabels.specialInstructions.title}
            </Box>
            <Box className={classes.subTitle}>
              {jobLabels.specialInstructions.subtitle}
            </Box>
            <TextAreaBlock
              value={form.values.intructons}
              form={form}
              type={"intructons"}
            />
            <Box className={classes.subTitle}>
              {jobLabels.specialInstructions.subtitleLength}
            </Box>
            {!clockView ? (
              <Box
                onClick={() => {
                  setClockView((state: boolean) => !state);
                }}
              >
                {form.values.videoLength} {`(hh:mm:ss)`}
              </Box>
            ) : (
              <Box display="flex" style={{ justifyContent: "flex-start" }}>
                <TimePicker
                  onBlur={() => setClockView((state: boolean) => !state)}
                  classNames={{
                    root: classes.root,
                    field: classes.field,
                    input: classes.input,
                  }}
                  value={form.values.videoLength}
                  withSeconds
                  onChange={(val: string) =>
                    form.setFieldValue("videoLength", val)
                  }
                />
              </Box>
            )}
            <Box className={classes.subTitle}>
              {jobLabels.specialInstructions.subtitleClips}
            </Box>
            <TextAreaBlock value={form.values.obs1} form={form} type={"obs1"} />
            <TextAreaBlock value={form.values.obs2} form={form} type={"obs2"} />
          </Box>
        );
    }
  };

  return blockType(type);
};

export default Block;
